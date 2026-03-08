const router = require("express").Router()
const multer = require("multer")

const Scan = require("../models/Scan")

const { runAI } = require("../utils/runAI")

const storage = multer.diskStorage({

destination: "uploads",

filename: (req, file, cb) => {
cb(null, Date.now() + "-" + file.originalname)
}

})

const upload = multer({ storage })

router.post("/upload", upload.single("file"), async (req, res) => {

const filePath = req.file.path

const result = await runAI(filePath)

const scan = new Scan({

fileName: req.file.filename,
result: result.label,
confidence: result.confidence

})

await scan.save()

res.json(result)

})
router.get("/history",async(req,res)=>{

const scans = await Scan.find().sort({date:-1})

res.json(scans)

})
module.exports = router