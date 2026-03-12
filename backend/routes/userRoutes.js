const express = require("express")
const router = express.Router()

const User = require("../models/User")
const jwt = require("jsonwebtoken")
const userController = require("../controllers/userController")
// Get logged in user
router.get("/me", async (req,res)=>{

try{

const token = req.headers.authorization.split(" ")[1]

const decoded = jwt.verify(token,"secretkey")

const user = await User.findById(decoded.id)

res.json(user)

}catch(err){

res.status(401).json({message:"Invalid token"})

}

})

router.delete("/delete", userController.deleteAccount)
module.exports = router