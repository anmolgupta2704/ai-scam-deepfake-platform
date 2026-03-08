import tensorflow as tf
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential

model = Sequential([

layers.Conv2D(32,(3,3),activation="relu",input_shape=(128,128,3)),
layers.MaxPooling2D(),

layers.Conv2D(64,(3,3),activation="relu"),
layers.MaxPooling2D(),

layers.Flatten(),

layers.Dense(128,activation="relu"),
layers.Dense(1,activation="sigmoid")

])

model.compile(

optimizer="adam",
loss="binary_crossentropy",
metrics=["accuracy"]

)

model.fit(train_data,epochs=10)

model.save("deepfake_model.h5")