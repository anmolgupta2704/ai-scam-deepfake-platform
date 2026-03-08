const mongoose = require("mongoose")

const scanSchema = new mongoose.Schema({

fileName: String,

result: String,

confidence: Number,

userId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User"
},

date: {
type: Date,
default: Date.now
}

})

module.exports = mongoose.model("Scan", scanSchema)