const router = require("express").Router()
const multer = require("multer")
const Scan = require("../models/Scan")

const storage = multer.diskStorage({

destination:"uploads",

filename:(req,file,cb)=>{
cb(null,Date.now()+"-"+file.originalname)
}

})

const upload = multer({storage})

router.post("/upload",upload.single("file"),async(req,res)=>{

const result = "Safe"   // later AI model result

const scan = new Scan({

fileName:req.file.filename,

result

})

await scan.save()

res.json({

message:"File scanned",

result

})

})

module.exports = router
