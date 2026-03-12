import sys
import cv2
import numpy as np
import tensorflow as tf
import json

model = tf.keras.models.load_model("deepfake_model.h5")

video_path = sys.argv[1]

cap = cv2.VideoCapture(video_path)

predictions = []

while True:

    ret, frame = cap.read()

    if not ret:
        break

    frame = cv2.resize(frame,(128,128))
    frame = np.expand_dims(frame,axis=0)

    pred = model.predict(frame)[0][0]

    predictions.append(pred)

cap.release()

avg = sum(predictions)/len(predictions)

if avg > 0.5:

    result = {
        "label":"Deepfake",
        "confidence":float(avg)
    }

else:

    result = {
        "label":"Real",
        "confidence":float(1-avg)
    }

print(json.dumps(result))