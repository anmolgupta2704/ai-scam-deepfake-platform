import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import "../styles/dashboard.css";

export default function Upload(){

const [file,setFile] = useState(null)

async function handleUpload(){

if(!file){
alert("Please select file")
return
}

const formData = new FormData()

formData.append("file",file)

const res = await fetch("http://localhost:5000/api/scan/upload",{

method:"POST",

body:formData

})

const data = await res.json()

alert(
"Result: " + data.label +
"\nConfidence: " + (data.confidence * 100).toFixed(2) + "%"
)


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
onChange={(e)=>setFile(e.target.files[0])}
/>

<button className="btn" onClick={handleUpload}>
Scan File
</button>

</div>

</MainLayout>

)

}