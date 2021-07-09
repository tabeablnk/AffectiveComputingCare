# Imports
print("Welcome to Drowsiness Script")
import os
import argparse
from PreprocessOneVideo import Preprocessing
#from blink_video import blink_detector
from Prediction import Predict
print("Import successfully")

# adjust video path here
video_path_global = "./Videos/Müdigkeit_Video_ingrid.mov"
# Kalibrierungsvideo

video_kal_path_global = "./Videos/Calibration_Video_ingrid.mov"
# Patient ID
patientID_global = 1

def getPatientData(video_path, video_kal_path, patientID, use_existing_files=True):
	drowsiness_results = read_drowsiness(patientID, use_existing_files)
	return drowsiness_results


def read_drowsiness(patient_id, use_existing_files):
	print("...Read drowsiness")
	output_path_txt_calib = run_blink_video_calib(patient_id, use_existing_files)
	output_path_txt_data = run_blink_video_data(patient_id, use_existing_files)
	# Run Preprocessing
	file_name_prep = "Blinks_pred_video_" + str(patient_id) + ".npy"
	file_name_prep = "Blinks_pred_video_ingrid.npy"
	output_path_preprocessed = os.path.join('preprocessed_files', file_name_prep)
	is_file = os.path.isfile(os.path.join(os.getcwd(), 'preprocessed_files', file_name_prep))
	if not(use_existing_files and is_file):
		print("Preprocessing")
		Preprocessing(output_path_txt_calib, output_path_txt_data, output_path_preprocessed).main()
	else:
		print("use existing files")
	# run Prediction.py
	label = Predict().main(output_path_preprocessed)
	print(os.getcwd())
	return label


def run_blink_video_calib(patient_id, use_existing_files):
	output_path_txt = './txt_files'
	file_name_calib = "calibration_" + str(patient_id) + ".txt"
	file_name_calib = "calibration_ingrid.txt"
	output_path_txt_calib = os.path.join(output_path_txt, file_name_calib)
	is_file = os.path.isfile(os.path.join(os.getcwd(), 'txt_files', file_name_calib))
	if not (use_existing_files and is_file):
		return
		#blink_detector(output_path_txt_calib, video_kal_path_global)
	else:
		print("use existing files")
	return output_path_txt_calib


def run_blink_video_data(patient_id, use_existing_files):
	output_path_txt = './txt_files'
	file_name_data = "data_" + str(patient_id) + ".txt"
	file_name_data = "data_ingrid.txt"
	output_path_txt_data = os.path.join(output_path_txt, file_name_data)
	is_file = os.path.isfile(os.path.join(os.getcwd(), 'txt_files', file_name_data))
	if not (use_existing_files and is_file):
		return
		#blink_detector(output_path_txt_data, video_path_global)
	else:
		print("use existing files")
	return output_path_txt_data


def main():
	print("Starting...")
	parser = argparse.ArgumentParser(description='Give alle arguments to script.')
	parser.add_argument('--patientid', metavar='N', type=int, nargs='+',
						help='an integer for the accumulator', default=1)
	args = parser.parse_args()
	patientid = args.patientid
	print("ID", patientid)
	getPatientData(video_path_global, video_kal_path_global, patientid)


if __name__ == "__main__":
	print("Execute main")
	main()
