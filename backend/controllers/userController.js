exports.deleteAccount = async(req,res)=>{

try{

await User.deleteOne({email:req.user.email})

res.json({message:"Account deleted"})

}catch(err){

res.status(500).json({error:"Delete failed"})

}

}