const Scan = require("../models/Scan")
const { runAI } = require("../utils/runAI")

// upload + AI detect
exports.scanFile = async (req,res)=>{

try{

const filePath = req.file.path

// detect image or video
let type = "image"

if(req.file.mimetype.includes("video")){
type = "video"
}

const result = await runAI(filePath,type)

const scan = new Scan({

fileName: req.file.filename,
result: result.label,
confidence: result.confidence,
date: new Date()

})

await scan.save()

res.json(result)

}catch(err){

console.log(err)

res.status(500).json({
error:"Scan failed"
})

}

}


// delete scan
exports.deleteScan = async(req,res)=>{

try{

await Scan.findByIdAndDelete(req.params.id)

res.json({message:"Deleted"})

}catch(err){

res.status(500).json({error:"Delete failed"})

}

}


// dashboard stats
exports.getStats = async(req,res)=>{

try{

const total = await Scan.countDocuments()

const threats = await Scan.countDocuments({result:/Deepfake/i})

const safe = await Scan.countDocuments({result:/Real/i})

res.json({
total,
threats,
safe
})

}catch(err){

res.status(500).json({error:"Stats error"})

}

}


// recent scans
exports.getRecentScans = async (req,res)=>{

try{

const scans = await Scan
.find()
.sort({date:-1})
.limit(5)

res.json(scans)

}catch(err){

res.status(500).json({error:"Failed to fetch scans"})

}

}


// export scans
exports.exportScans = async(req,res)=>{

try{

const scans = await Scan.find()

res.json(scans)

}catch(err){

res.status(500).json({error:"Export failed"})

}

}


// clear history
exports.clearHistory = async(req,res)=>{

try{

await Scan.deleteMany()

res.json({message:"History cleared"})

}catch(err){

res.status(500).json({error:"Clear history failed"})

}

}