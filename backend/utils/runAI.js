const { spawn } = require("child_process")

exports.runAI = (filePath) => {

return new Promise((resolve,reject)=>{

const py = spawn("python", ["../ai-model/predict.py", filePath])

let output = ""

py.stdout.on("data",(data)=>{
output += data.toString()
})

py.on("close",()=>{

try{

const jsonStart = output.indexOf("{")
const json = output.slice(jsonStart)

const result = JSON.parse(json)

resolve(result)

}catch(err){

reject("Invalid AI response")

}

})

})

}