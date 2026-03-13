const { spawn } = require("child_process")
const path = require("path")

function runAI(filePath,type){

return new Promise((resolve,reject)=>{

let script = "predict.py"

if(type === "video"){
script = "video_predict.py"
}

const scriptPath = path.join(__dirname,"../../ai-model",script)

const py = spawn("py",["-u",scriptPath,filePath])

let output = ""

py.stdout.on("data",(data)=>{
output += data.toString()
})

py.stderr.on("data",(data)=>{
console.log("Python log:",data.toString())
})

py.on("close",()=>{

try{

const start = output.indexOf("{")

if(start === -1){
console.log("Invalid output:",output)
return reject("Invalid AI response")
}

const json = output.slice(start)

const result = JSON.parse(json)

resolve(result)

}catch(err){

console.log("Parse error:",output)
reject("Invalid AI response")

}

})

})

}

module.exports = { runAI }