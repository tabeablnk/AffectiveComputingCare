'''
This file is to make a prediction of one preprocessed video.
Output: 1 label
'''

import numpy as np
import tensorflow as tf
from DrowsinessModel.Training import Network

# Constants
output_size = 1
feature_size = 4
batch_size = 64
num_epochs = 80
Pre_fc1_size = 32
Post_fc1_size_per_layer = 16
embb_size = 16
embb_size2 = 16
Post_fc2_size = 8
hstate_size = [32, 32, 32, 32]
num_layers = 4
step_size = 30
drop_out_p = 1.0
lr = 0.000053
th = 1.253

class Predict():
	def __init__(self):
		pass

	def predict(self, Blinks):
		# TODO: neeeds to be improved
		# Blinks: the blink sequences of the video to test
		tf.reset_default_graph()
		# Create shape of the network to restore pretrained weights
		input_net = tf.placeholder(tf.float32, shape=(None, None, feature_size), name='bacth_in')
		labels = tf.placeholder(tf.float32, shape=(None, output_size), name='labels_net')  # size=[batch,1]
		keep_p = tf.placeholder(tf.float32)
		training = tf.placeholder(tf.bool, name='phase_train')
		output, end_points, concati = Network(input=input_net, Pre_fc1_size=Pre_fc1_size,
											  Post_fc1_size_per_layer=Post_fc1_size_per_layer,
											  embb_size=embb_size, embb_size2=embb_size2, Post_fc2_size=Post_fc2_size,
											  hstate_size=hstate_size, num_layers=num_layers,
											  feature_size=feature_size, step_size=step_size, output_size=output_size,
											  keep_p=keep_p, training=training)
		variable_path = './'
		with tf.variable_scope('last_fc', reuse=True):
			last_fc_weights = tf.get_variable('weights')
		with tf.variable_scope('post_fc2', reuse=True):
			post_fc2_weights = tf.get_variable('weights')
		with tf.variable_scope('embeddings', reuse=True):
			embeddings_weights = tf.get_variable('weights')
		with tf.variable_scope('embeddings2', reuse=True):
			embeddings_weights2 = tf.get_variable('weights')
		with tf.variable_scope('pre_fc1', reuse=True):
			pre_fc1_weights = tf.get_variable('weights')

		with tf.variable_scope('post_fc1', reuse=True):
			for lay in range(num_layers):
				post_fc1_weights = tf.get_variable('weights_%s' % lay)

		# restore pretrained model
		with tf.Session() as sess:
			saver = tf.train.Saver()
			print('loading variables...')
			saver.restore(sess, variable_path + 'my_model3')
			# predict value for one video
			if output_size == 1:
				classification = sess.run([output], feed_dict={input_net: Blinks, labels: (0, 1), keep_p: 1.0, training: False})
				prediction = classification[0]
				print("Prediction is: ", prediction)


def main():
	# TODO: richtige namen verwenden und ohne test
	# preprocessed blinks:
	Blinks = np.load('./Blinks_pred_video.npy')

	# Normalize the input (second phase)
	Blinks[:, :, 0] = (Blinks[:, :, 0] - np.mean(Blinks[:, :, 0])) / np.std(Blinks[:, :, 0])
	Blinks[:, :, 1] = (Blinks[:, :, 1] - np.mean(Blinks[:, :, 1])) / np.std(Blinks[:, :, 1])
	Blinks[:, :, 2] = (Blinks[:, :, 2] - np.mean(Blinks[:, :, 2])) / np.std(Blinks[:, :, 2])
	Blinks[:, :, 3] = (Blinks[:, :, 3] - np.mean(Blinks[:, :, 3])) / np.std(Blinks[:, :, 3])

	# TODO: indices are missing
	Predict().predict(Blinks)


if __name__ == '__main__':
	main()
