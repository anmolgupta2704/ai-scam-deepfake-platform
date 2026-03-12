const { spawn } = require("child_process")
const path = require("path")

function runAI(filePath,type){

return new Promise((resolve,reject)=>{

let script = "predict.py"

if(type === "video"){
script = "video_predict.py"
}

// absolute path of python script
const scriptPath = path.join(__dirname,"../../ai-model",script)

const py = spawn("python",[scriptPath,filePath])

let output = ""
let error = ""

// collect python output
py.stdout.on("data",(data)=>{
output += data.toString()
})

// collect python errors
py.stderr.on("data",(data)=>{
error += data.toString()
})

// when python finishes
py.on("close",(code)=>{

if(code !== 0){
console.log("Python error:",error)
return reject("Python process failed")
}

try{

// tensorflow logs ignore
const jsonStart = output.indexOf("{")

if(jsonStart === -1){
return reject("Invalid AI response")
}

const json = output.slice(jsonStart)

const result = JSON.parse(json)

resolve(result)

}catch(err){

reject("Invalid AI response")

}

})

})

}

module.exports = { runAI }