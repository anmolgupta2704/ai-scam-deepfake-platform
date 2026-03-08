const { spawn } = require("child_process")

exports.runAI = (filePath) => {

return new Promise((resolve, reject) => {

const process = spawn("python", ["../ai-model/predict.py", filePath])

process.stdout.on("data", (data) => {

const result = JSON.parse(data)

resolve(result)

})

})

}