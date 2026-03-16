import { useState } from "react"
import MainLayout from "../layout/MainLayout"

export default function ScamCheck(){

const [text,setText] = useState("")
const [result,setResult] = useState(null)

async function checkScam(){

const res = await fetch("http://localhost:5000/api/scam/check",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({text})

})

const data = await res.json()

setResult(data)

}

return(

<MainLayout>

<div className="page-card">

<h1>Scam Message Detector</h1>

<textarea
rows="6"
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<button className="btn" onClick={checkScam}>
Analyze Message
</button>

{result && (

<div style={{marginTop:"20px"}}>

<h3>
Result: {result.label}
</h3>

<p>
Confidence: {(result.confidence*100).toFixed(1)}%
</p>

</div>

)}

</div>

</MainLayout>

)

}