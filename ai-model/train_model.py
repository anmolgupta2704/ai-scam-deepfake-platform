import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential

datagen = ImageDataGenerator(rescale=1./255)

train_data = datagen.flow_from_directory(
"dataset/train",
target_size=(128,128),
batch_size=32,
class_mode="binary"
)

valid_data = datagen.flow_from_directory(
"dataset/valid",
target_size=(128,128),
batch_size=32,
class_mode="binary"
)

test_data = datagen.flow_from_directory(
"dataset/test",
target_size=(128,128),
batch_size=32,
class_mode="binary"
)

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

model.fit(
train_data,
epochs=5,
validation_data=valid_data
)

model.evaluate(test_data)

model.save("deepfake_model.h5")

print("Model training completed")