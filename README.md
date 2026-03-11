# 🛡 AI Scam & Deepfake Detection System

## 📌 Overview

The **AI Scam & Deepfake Detection System** is an AI-powered web platform designed to detect manipulated media such as **deepfake images, videos, and scam content**.

The system allows users to upload media files which are analyzed using **Deep Learning models** to determine whether the content is **Real or Deepfake**.

This platform provides a **secure dashboard interface** where users can upload files, analyze results, view scan history, and manage their profiles.

The goal of this project is to help detect **AI-generated scams and manipulated media**, improving digital security and awareness.

---

# 🚀 Features

### 🔐 Secure Authentication

* User registration and login system
* Protected routes using authentication tokens

### 📂 Media Upload & Scan

Users can upload:

* Images
* Videos
* Audio files

The uploaded media is analyzed by an **AI model**.

### 🤖 AI-Based Deepfake Detection

* Deep Learning model trained using **TensorFlow**
* Detects manipulated faces and fake media
* Returns prediction with confidence score

### 📊 Dashboard Analytics

Displays statistics such as:

* Total scans performed
* Threats detected
* Safe files detected

### 📑 Scan Reports

* Shows history of scanned files
* Displays detection results
* Tracks scan timestamps

### 👤 User Profile Management

* View user details
* Update profile information

### 🎨 Professional Dashboard UI

* Dark themed modern interface
* Sidebar navigation
* Responsive layout

---

# 🧠 AI Model

The project uses a **Convolutional Neural Network (CNN)** model for deepfake detection.

### Model Architecture

* Conv2D
* MaxPooling
* Flatten
* Dense Layers
* Sigmoid Output

### Training Details

* Framework: **TensorFlow / Keras**
* Image size: **128 × 128**
* Loss function: **Binary Crossentropy**
* Optimizer: **Adam**

Output prediction:

```
Real
or
Deepfake
```

with confidence score.

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router
* CSS3 (Custom Advanced Styling)
* Vite

## Backend

* Node.js
* Express.js
* REST API

## Database

* MongoDB

## AI / Machine Learning

* Python
* TensorFlow
* OpenCV
* NumPy
* Scikit-learn

## Tools

* VS Code
* Git
* GitHub
* Postman

---

# 📂 Project Structure

```
ai-scam-deepfake-platform
│
├── frontend
│
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Upload.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── layout
│   │   │   ├── MainLayout.jsx
│   │   │   └── AuthLayout.jsx
│   │   │
│   │   ├── styles
│   │   │   ├── dashboard.css
│   │   │   ├── layout.css
│   │   │   └── auth.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── middleware
│   ├── utils
│   └── server.js
│
├── ai-model
│   ├── dataset
│   ├── train_model.py
│   ├── predict.py
│   └── deepfake_model.h5
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/anmolgupta2704/ai-scam-deepfake-platform
```

---

## 2️⃣ Install Frontend

```
cd frontend
npm install
```

---

## 3️⃣ Run Frontend

```
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

## 4️⃣ Run Backend

```
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

## 5️⃣ Train AI Model

```
cd ai-model
python train_model.py
```

This generates:

```
deepfake_model.h5
```

---
<!-- 
# 📸 Screenshots

### Login Page

User authentication interface.

### Dashboard

Displays detection statistics.

### Upload Page

Upload files for AI analysis.

### Reports Page

View scan history and results.

### Profile Page

Manage user information.

--- -->

# 🎯 Use Cases

* Detect deepfake images and videos
* Identify manipulated media
* Prevent AI-powered scams
* Improve online media authenticity
* Provide monitoring dashboard for suspicious media

---

# 🔮 Future Enhancements

* Video deepfake detection
* Voice deepfake detection
* Real-time AI detection
* Cloud storage integration
* AI confidence visualization
* Multi-user monitoring system

---

# 👨‍💻 Author

**Anmol Gupta**

B.Tech Computer Science (Cybersecurity)

---

# ⭐ Project Purpose

This project was developed as a **Final Year Major Project** to demonstrate the use of:

* Artificial Intelligence
* Full Stack Web Development
* Cybersecurity Applications

---

# 📜 License

This project is developed for **educational and research purposes**
