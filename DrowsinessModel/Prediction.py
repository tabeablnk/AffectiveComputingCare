'''
This file is to make a prediction of one preprocessed video.
Output: 1 label
'''

import numpy as np
import tensorflow as tf
import HMSLSTM_Main as Main


# Constants
feature_size = 4
output_size = 1
num_layers = 4
batch_size = 64
num_epochs = 80
drop_out_p = 1.0
lr = 0.000053
th = 1.253


class Predict():
	def __init__(self):
		self.Pre_fc1_size = 32
		self.Post_fc1_size_per_layer = 16
		self.embb_size = 16
		self.embb_size2 = 16
		self.Post_fc2_size = 8
		self.hstate_size = [32, 32, 32, 32]
		self.num_layers = 4
		self.step_size = 30
		self.keep_p = 1.0

	def main(self, path_to_preprocessed_file):
		# preprocessed blinks:
		Blinks = np.load(path_to_preprocessed_file)  # load data from npy file
		# Normalize the input (second phase)
		Blinks[:, :, 0] = (Blinks[:, :, 0] - np.mean(Blinks[:, :, 0])) / np.std(Blinks[:, :, 0])
		Blinks[:, :, 1] = (Blinks[:, :, 1] - np.mean(Blinks[:, :, 1])) / np.std(Blinks[:, :, 1])
		Blinks[:, :, 2] = (Blinks[:, :, 2] - np.mean(Blinks[:, :, 2])) / np.std(Blinks[:, :, 2])
		Blinks[:, :, 3] = (Blinks[:, :, 3] - np.mean(Blinks[:, :, 3])) / np.std(Blinks[:, :, 3])
		label = self.predict(Blinks)
		return label

	def predict(self, Blinks):
		tf.reset_default_graph()
		# Create shape of the network to restore pretrained weights
		input_net = tf.placeholder(tf.float32, shape=(None, None, feature_size), name='bacth_in')
		labels = tf.placeholder(tf.float32, shape=(None, output_size), name='labels_net')  # size=[batch,1]
		keep_p = tf.placeholder(tf.float32)
		training = tf.placeholder(tf.bool, name='phase_train')
		output, end_points, concati = self.initialize_net(input_net, training)
		variable_path = './'
		# restore pretrained model
		with tf.Session() as sess:
			saver = tf.train.Saver()
			print('loading variables...')
			saver.restore(sess, variable_path + 'my_model3')  # Choose model which use to predict
			# predict value for one video
			if output_size == 1:
				classification = sess.run([output], feed_dict={input_net: Blinks, keep_p: 1.0, training: False})
				label = self.calculate_prediction(classification)
		return label

	def calculate_prediction(self, predictions):
		print("Predictions: ", predictions)
		prediction_count = 0
		for prediction in predictions:
			prediction_count += prediction[0]
		final_decision = prediction_count / len(predictions)
		if 3.3 > final_decision >= 0.0:
			label = 0
		elif 6.6 > final_decision >= 3.3:
			label = 5
		elif 10 >= final_decision >= 6.6:
			label = 10
		print('The predicted label is: ', label)
		return label


	def initialize_net(self, input_net, training):
		end_points = {}
		batch_size = tf.shape(input_net)[0]
		with tf.variable_scope('pre_fc1'):
			pre_fc1_weights = tf.get_variable('weights', [feature_size, self.Pre_fc1_size], dtype=tf.float32,
											  initializer=tf.contrib.layers.xavier_initializer(uniform=False, seed=None,
																							   dtype=tf.float32))
			pre_fc1_biases = tf.get_variable('biases', [self.Pre_fc1_size], dtype=tf.float32,
											 initializer=tf.constant_initializer(0.0))
			reshaped_input_net = tf.reshape(input_net, [-1, feature_size])
			input_RNN = tf.matmul(reshaped_input_net, pre_fc1_weights)
			input_RNN = self.batchNorm(input_RNN, pre_fc1_biases, None, training, scope='bn')
			input_RNN = tf.nn.relu(input_RNN)
			input_RNN = tf.reshape(input_RNN, [-1, self.step_size, self.Pre_fc1_size])  # size=[batch,Time,Pre_fc1_size ]
			input_RNN = tf.nn.dropout(input_RNN, self.keep_p)
		end_points['pre_fc1'] = input_RNN
		hmslstm_block = Main.HMSLSTM_Block(input_size=[batch_size, self.step_size, self.Pre_fc1_size], step_size=self.step_size,
										   hstate_size=self.hstate_size, num_layers=num_layers, keep_p=self.keep_p)
		output_RNN_set, states_RNN, concati = hmslstm_block(input_RNN, reuse=False)
		end_points['mid_layers'] = output_RNN_set
		with tf.variable_scope('post_fc1'):
			for lay in range(num_layers):
				post_fc1_weights = tf.get_variable('weights_%s' % lay, [self.hstate_size[lay], self.Post_fc1_size_per_layer],
												   dtype=tf.float32,
												   initializer=tf.contrib.layers.xavier_initializer(uniform=False,
																									seed=None,
																									dtype=tf.float32))
				post_fc1_biases = tf.get_variable('biases_%s' % lay, [self.Post_fc1_size_per_layer], dtype=tf.float32,
												  initializer=tf.constant_initializer(0.0))
				trash, output_RNN = tf.split(output_RNN_set[lay], [self.step_size - 1, 1], axis=0,
											 name='layers')  # size of output_RNN[lay] is (step,batch,hsize),
				#  but we want just the last step
				output_RNN = tf.squeeze(output_RNN, axis=0)  # size=(batch,h_size)
				post_fc1 = tf.matmul(output_RNN, post_fc1_weights)
				post_fc1 = self.batchNorm(post_fc1, post_fc1_biases, None, training, scope='bn')
				if lay == 0:
					post_fc1_out = post_fc1
				else:
					post_fc1_out = tf.concat([post_fc1_out, post_fc1],
											 axis=1)  # size=[Batch,layer*Post_fc1_size_per_layer]
			post_fc1_out = tf.nn.relu(post_fc1_out)
			post_fc1_out = tf.nn.dropout(post_fc1_out, self.keep_p)
			end_points['post_fc1'] = post_fc1_out
		with tf.variable_scope('embeddings'):
			embeddings_weights = tf.get_variable('weights', [self.Post_fc1_size_per_layer * num_layers, self.embb_size],
												 dtype=tf.float32,
												 initializer=tf.contrib.layers.xavier_initializer(uniform=False,
																								  seed=None,
																								  dtype=tf.float32))
			embeddings_biases = tf.get_variable('biases', [self.embb_size], dtype=tf.float32,
												initializer=tf.constant_initializer(0.0))
			embeddings = tf.matmul(post_fc1_out, embeddings_weights)
			embeddings = self.batchNorm(embeddings, embeddings_biases, None, training, scope='bn')
			embeddings = tf.nn.relu(embeddings)
			embeddings = tf.nn.dropout(embeddings, self.keep_p)
			end_points['embeddings'] = embeddings
		with tf.variable_scope('embeddings2'):
			embeddings_weights2 = tf.get_variable('weights', [self.embb_size, self.embb_size2], dtype=tf.float32,
												  initializer=tf.contrib.layers.xavier_initializer(uniform=False,
																								   seed=None,
																								   dtype=tf.float32))
			embeddings_biases2 = tf.get_variable('biases', [self.embb_size2], dtype=tf.float32,
												 initializer=tf.constant_initializer(0.0))

			embeddings2 = tf.matmul(embeddings, embeddings_weights2)
			embeddings2 = self.batchNorm(embeddings2, embeddings_biases2, None, training, scope='bn')
			embeddings2 = tf.nn.relu(embeddings2)
			embeddings2 = tf.nn.dropout(embeddings2, self.keep_p)
			end_points['embeddings2'] = embeddings2
		with tf.variable_scope('post_fc2'):
			post_fc2_weights = tf.get_variable('weights', [self.embb_size2, self.Post_fc2_size],
											   dtype=tf.float32,
											   initializer=tf.contrib.layers.xavier_initializer(uniform=False,
																								seed=None,
																								dtype=tf.float32))
			post_fc2_biases = tf.get_variable('biases', [self.Post_fc2_size], dtype=tf.float32,
											  initializer=tf.constant_initializer(0.0))
			post_fc2_out = tf.matmul(embeddings2, post_fc2_weights)
			post_fc2_out = self.batchNorm(post_fc2_out, post_fc2_biases, None, training, scope='bn')
			post_fc2_out = tf.nn.relu(post_fc2_out)
			post_fc2_out = tf.nn.dropout(post_fc2_out, self.keep_p)
			end_points['post_fc2'] = post_fc2_out
		with tf.variable_scope('last_fc'):
			last_fc_weights = tf.get_variable('weights', [self.Post_fc2_size, output_size],
											  dtype=tf.float32,
											  initializer=tf.contrib.layers.xavier_initializer(uniform=False, seed=None,
																							   dtype=tf.float32))
			last_fc_biases = tf.get_variable('biases', [output_size], dtype=tf.float32,
											 initializer=tf.constant_initializer(0.0))
			output = tf.matmul(post_fc2_out, last_fc_weights) + last_fc_biases
			if output_size == 1:
				end_points['before the last sigmoid'] = output
				output = 10 * tf.sigmoid(output)
		return output, end_points, concati  # size=[Batch,1]


	def batchNorm(self, x, beta, gamma, training, scope='bn'):
		with tf.variable_scope(scope):
			batch_mean, batch_var = tf.nn.moments(x, [0], name='moments')
			ema = tf.train.ExponentialMovingAverage(decay=0.5)
			def mean_var_with_update():
				ema_apply_op = ema.apply([batch_mean, batch_var])
				with tf.control_dependencies([ema_apply_op]):
					return tf.identity(batch_mean), tf.identity(batch_var)
			mean, var = tf.cond(training, mean_var_with_update,
								lambda: (ema.average(batch_mean), ema.average(batch_var)))
			normed = tf.nn.batch_normalization(x, mean, var, beta, gamma, 1e-3)
		return normed


if __name__ == '__main__':
	path_to_preprocessed_file = './preprocessed_files/Blinks_pred_video_happy_2.npy'
	Predict().main(path_to_preprocessed_file)