import os
import numpy as np

class Preprocessing():
    def __init__(self):
        self.__path_to_video = './Drowsiness/data.txt'  # man muss mit cd in DrowsinessModel sein
        self.__path_to_calibration = './Drowsiness/calibration.txt'
        self.__stride = 2
        self.__window_size = 30
        self.__blink_num_calibration = None
        self.__blink_num = None
        self.__output_path = './Blinks_pred_video.npy'
        self.__frequency_calibration = None
        self.__amplitude_calibration = None
        self.__duration_calibration = None
        self.__velocity_calibration = None
        self.__frequency = None
        self.__amplitude = None
        self.__duration = None
        self.__velocity = None
        self.__output = None

    def main(self):
        self.__calibrate_person()
        self.preprocess_txt_file()
        np.save(open(self.__output_path, 'wb'), self.__output)

    def __get_std_mean(self, value, bunch_size):
        mean = np.mean(value[-bunch_size:])
        std = np.std(value[-bunch_size:])
        if std == 0:
            std = np.std(value)
        return (mean, std)

    def __calibrate_person(self):
        print('calibrate person')
        # Decisions were made concerning to statistics in the calibration phase of each individuum
        freqency = np.loadtxt(self.__path_to_calibration, usecols=1)
        amplitude = np.loadtxt(self.__path_to_calibration, usecols=2)
        duration = np.loadtxt(self.__path_to_calibration, usecols=3)  # Duration
        velocity = np.loadtxt(self.__path_to_calibration, usecols=4)  # Eye opening velocity
        self.__blink_num_calibration = len(freqency)

        # Baselining: Using the last bunch_size number of blinks to calculate mean and std
        bunch_size = self.__blink_num_calibration // 3
        self.__frequency_calibration = self.__get_std_mean(freqency, bunch_size)
        self.__amplitude_calibration = self.__get_std_mean(amplitude, bunch_size)
        self.__duration_calibration = self.__get_std_mean(duration, bunch_size)
        self.__velocity_calibration = self.__get_std_mean(velocity, bunch_size)

    def preprocess_txt_file(self):
        self.__frequency = np.loadtxt(self.__path_to_video, usecols=1)
        self.__amplitude = np.loadtxt(self.__path_to_video, usecols=2)
        self.__duration = np.loadtxt(self.__path_to_video, usecols=3)
        self.__velocity = np.loadtxt(self.__path_to_video, usecols=4)
        self.__blink_num = len(self.__frequency)
        normalized_blinks = self.normalize_blinks()
        output = self.unroll_in_time(normalized_blinks)
        self.__output = self.unison_shuffled_copies(output)

    def unison_shuffled_copies(self, a):
        p = np.random.permutation(len(a))
        return a[p]

    def normalize_blinks(self):
        num_blinks = self.__blink_num
        normalized_blinks = np.zeros([num_blinks, 4])
        normalized_freq = (self.__frequency[0:num_blinks] - self.__frequency_calibration[0]) / self.__frequency_calibration[1]
        normalized_blinks[:, 0] = normalized_freq
        normalized_amp = (self.__amplitude[0:num_blinks] - self.__amplitude_calibration[0]) / self.__amplitude_calibration[1]
        normalized_blinks[:, 1] = normalized_amp
        normalized_dur = (self.__duration[0:num_blinks] - self.__duration_calibration[0]) / self.__duration_calibration[1]
        normalized_blinks[:, 2] = normalized_dur
        normalized_vel = (self.__velocity[0:num_blinks] - self.__velocity_calibration[0]) / self.__velocity_calibration[1]
        normalized_blinks[:, 3] = normalized_vel
        return normalized_blinks

    def unroll_in_time(self, in_data):
        # in_data is [n,4]            out_data is [N,Window_size,4]
        n = len(in_data)
        if n <= self.__window_size:
            out_data = np.zeros([1, self.__window_size, 4])
            out_data[0, -n:, :] = in_data
            return out_data
        else:
            N = ((n - self.__window_size) // self.__stride) + 1
            out_data = np.zeros([N, self.__window_size, 4])
            for i in range(N):
                if i * self.__stride + self.__window_size <= n:
                    out_data[i, :, :] = in_data[i * self.__stride:i * self.__stride + self.__window_size, :]
                else:
                    break
            return out_data


if __name__ == '__main__':
    Preprocessing().main()