const express = require("express")
const router = express.Router()

const scamController = require("../controllers/scamController")

router.post("/check",scamController.checkScam)

module.exports = router