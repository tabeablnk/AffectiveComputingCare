from keras.preprocessing import image
import pickle
import os
import numpy as np

img_train_dir = './Images/Images_train'
img_test_dir = './Images/Images_test'
pspi_dir = './Frame_Labels/PSPI'

img_height = 48
img_width = 48

def create_data(img_dir):
    X = []
    Y = []

    for i, dir in enumerate(os.listdir(img_dir)):
        print(dir)
        for j, dir2 in enumerate(os.listdir(os.path.join(img_dir, dir))):
            print(dir2)
            for k, file in enumerate(os.listdir(os.path.join(os.path.join(img_dir, dir), dir2))):
                image_path = os.path.join(os.path.join(os.path.join(os.path.join(img_dir, dir), dir2)), file)
                img = image.load_img(image_path, target_size=(img_height, img_width, 3))
                img = image.img_to_array(img)
                img = img / 255  # evtl. weglassen
                X.append(img)
                file_split = file.split(".")
                txt_file = file_split[0] + "_facs.txt"
                pspi_path = os.path.join(os.path.join(os.path.join(os.path.join(pspi_dir, dir), dir2)), txt_file)
                f = open(pspi_path, 'r')
                value = f.read()
                float_value = float(value)
                Y.append(float_value)

    X = np.asarray(X)
    Y = np.asarray(Y)
    return X, Y

X, Y = create_data(img_train_dir)

# save train data in csv file
all_data_list = []
for i in range(len(Y)):
    image_list = [X[i], Y[i]]
    all_data_list.append(image_list)
path_to_file = './dataset_train_pain.csv'
with open(path_to_file, 'wb') as f:
    pickle.dump(all_data_list, f)
f.close()

W,Z = create_data(img_test_dir)

# save test data in csv file
all_data_list = []
for i in range(len(Z)):
    image_list = [W[i], Z[i]]
    all_data_list.append(image_list)
path_to_file = './dataset_test_pain.csv'
with open(path_to_file, 'wb') as f:
    pickle.dump(all_data_list, f)
f.close()
