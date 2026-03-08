const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const scanRoutes = require("./routes/scanRoutes")
const userRoutes = require("./routes/userRoutes")
const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/scan", scanRoutes)

app.listen(5000, () => {
console.log("Server running on port 5000")
})