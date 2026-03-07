const mongoose = require("mongoose")

const scanSchema = new mongoose.Schema({

fileName:String,

result:String,

date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Scan",scanSchema)