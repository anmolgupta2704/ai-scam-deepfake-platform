import os
import sys
import json
import cv2
import numpy as np
import tensorflow as tf

# suppress TF logs
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"
tf.get_logger().setLevel("ERROR")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "deepfake_model.h5")

model = tf.keras.models.load_model(model_path)

video_path = sys.argv[1]

cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print(json.dumps({"label":"Error","confidence":0}))
    exit()

predictions = []
frame_count = 0

while True:

    ret, frame = cap.read()

    if not ret:
        break

    # process every 10th frame
    if frame_count % 10 == 0:

        frame = cv2.resize(frame,(128,128))
        frame = frame/255.0
        frame = np.expand_dims(frame,axis=0)

        pred = model.predict(frame,verbose=0)[0][0]

        predictions.append(pred)

    frame_count += 1

cap.release()

if len(predictions) == 0:
    print(json.dumps({"label":"Error","confidence":0}))
    exit()

avg = sum(predictions)/len(predictions)

if avg > 0.5:
    label = "Real"
    confidence = float(avg)
else:
    label = "Deepfake"
    confidence = float(1-avg)

print(json.dumps({
"label":label,
"confidence":confidence
}))