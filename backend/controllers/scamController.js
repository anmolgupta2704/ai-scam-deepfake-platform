exports.checkScam = (req,res)=>{

const text = req.body.text.toLowerCase()

const scamWords = [
"lottery",
"win money",
"click link",
"otp",
"bank otp",
"free money",
"investment",
"urgent",
"account blocked"
]

let score = 0

scamWords.forEach(word=>{
if(text.includes(word)){
score++
}
})

let label="Safe"
let confidence=0.3

if(score>=1){
label="Scam"
confidence=0.9
}

res.json({
label,
confidence
})

}