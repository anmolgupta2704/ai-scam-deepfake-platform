const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const scanRoutes = require("./routes/scanRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/deepfakeDB")

app.use("/api/auth", authRoutes)
app.use("/api/scan", scanRoutes)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})