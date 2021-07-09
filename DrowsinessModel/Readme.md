#  Realistic Dataset and Baseline Temporal Model for Early Drowsiness Detection

### About this code 

- This code contains 3 important classes: blink_video.py, Preprocessing.py and Training.py
- It takes videos as input and detects one of the following three classes: alert (0), low vigliant (5) and drowsy (10)

## Instruction to Run the Code:
### Create Conda environment with all required installations
After downloading miniconda you can create an environment: 

- conda create -name myenv python==3.6
- conda activate myenv

~$conda install -c conda-forge tensorflow==1.8.0

~$ conda install -c conda-forge opencv 

~$ conda install -c conda-forge dlib 

~$ conda install -c menpo dlib

~$ conda install -c conda-forge scikit-image

~$ pip install imutils

~$ conda install scikit-learn

~$ conda install -c conda-forge opencv

###### ~$ conda install -c anaconda scipy

pip install -U scikit_learn==0.20.4

	
### 1- Run Blink_Video.py:

  This file is fed by the input video(the directory should be given to the path variable). Then, it detects the blinks and outputs four features of all blinks in a text file: 
  - frequency
  - duration
  - velocity 
  - amplitude 
  
  "Trained_SVM_C=1000_gamma=0.1_for 7kNegSample.sav" is used for blink detection.
  
  *Use the link below to download "shape_predictor_68_face_landmarks.dat"
  
  https://drive.google.com/open?id=1nrfc-_pdIxNn2yO1_e7CxTyJQIk3A-vX
  
  "shape_predictor_68_face_landmarks.dat" is the pre-trained facial landmark detector inside the dlib library.
  

### 2-Run PreprocessingOneVideo.py

  This file gets 2 text files, calibration.txt and data.txt as the main input and preprocesses them for the subsequent steps. The outputs are .npy files.
  

### 3-Run Prediction.py:

  This code is used to train based on the .npy file generated in step 2. The model details and hyperparameters are all set here. The output is the training and test results and accuracies based on the pre-defined metrics in the paper.
 
  For convenience, five pre-trained models are provided, where each model used one of the folds as the test set in a five fold cross validation.
  
  These three files are pre-trained models for the training session of fold X, where fold X had been used as the test fold:
  
    my_modelX.data-00000-of-00001
    
    my_modelX.index
    
    my_modelX.meta
  

#### Link to the UTA-RLDD dataset:

https://sites.google.com/view/utarldd/home
