import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

import sys
import json
import tensorflow as tf
import numpy as np
import cv2

# suppress tensorflow warnings
tf.get_logger().setLevel("ERROR")

# model path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "deepfake_model.h5")

model = tf.keras.models.load_model(model_path)

file_path = sys.argv[1]

img = cv2.imread(file_path)
img = cv2.resize(img,(128,128))
img = img/255.0

img = np.expand_dims(img,axis=0)

prediction = model.predict(img,verbose=0)[0][0]

print("Model output:", prediction)

if prediction > 0.5:
    label = "Real"
else:
    label = "Deepfake"

result = {
"label": label,
"confidence": float(prediction)
}

print(json.dumps(result))