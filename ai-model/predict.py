import sys
import json
import tensorflow as tf
import numpy as np
import cv2

model = tf.keras.models.load_model("deepfake_model.h5")

file_path = sys.argv[1]

img = cv2.imread(file_path)
img = cv2.resize(img,(128,128))
img = img / 255.0

img = np.expand_dims(img,axis=0)

prediction = model.predict(img)[0][0]

if prediction > 0.5:

    result = {
        "label":"Deepfake",
        "confidence": float(prediction)
    }

else:

    result = {
        "label":"Real",
        "confidence": float(1-prediction)
    }

print(json.dumps(result))