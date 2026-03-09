const Scan = require("../models/Scan")
const { runAI } = require("../utils/runAI")

// upload + AI detect
exports.scanFile = async (req,res)=>{

try{

const filePath = req.file.path

const result = await runAI(filePath)

const scan = new Scan({
file: req.file.filename,
status: result.label
})

await scan.save()

res.json(result)

}catch(err){

res.status(500).json({
error:"Scan failed"
})

}

}

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