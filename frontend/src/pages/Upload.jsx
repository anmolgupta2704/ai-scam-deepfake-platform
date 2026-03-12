import { useState } from "react"
import MainLayout from "../layout/MainLayout"
import "../styles/dashboard.css"

export default function Upload(){

const [file,setFile] = useState(null)
const [loading,setLoading] = useState(false)
const [result,setResult] = useState(null)

async function handleUpload(){

if(!file){
alert("Please select file")
return
}

const formData = new FormData()
formData.append("file",file)

setLoading(true)

const res = await fetch("http://localhost:5000/api/scan/upload",{
method:"POST",
body:formData
})

const data = await res.json()

setLoading(false)

setResult(data.result)

}

return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">
Upload File
</h1>

<p className="page-sub">
Upload media to detect scam or deepfake
</p>

<input
type="file"
accept="image/*,video/*"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button className="btn" onClick={handleUpload}>
{loading ? "Scanning..." : "Scan File"}
</button>

{result && (

<div className="result-card">

<h3>Result: {result.label}</h3>

<p>
Confidence: {(result.confidence * 100).toFixed(2)}%
</p>

<div className="confidence-bar">

<div
className="confidence-fill"
style={{width:`${result.confidence*100}%`}}
></div>

</div>

</div>

)}

</div>

</MainLayout>

)

}