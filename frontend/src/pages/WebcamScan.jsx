import { useRef,useState } from "react"
import Webcam from "react-webcam"
import MainLayout from "../layout/MainLayout"

export default function WebcamScan(){

const webcamRef = useRef(null)

const [result,setResult] = useState(null)

async function capture(){

const imageSrc = webcamRef.current.getScreenshot()

const blob = await fetch(imageSrc).then(res=>res.blob())

const formData = new FormData()

formData.append("file",blob,"webcam.jpg")

const res = await fetch("http://localhost:5000/api/scan/upload",{
method:"POST",
body:formData
})

const data = await res.json()

setResult(data.result)

}

return(

<MainLayout>

<div className="page-card">

<h1>Live Deepfake Detection</h1>

<Webcam
audio={false}
ref={webcamRef}
screenshotFormat="image/jpeg"
width={400}
/>

<br/>

<button className="btn" onClick={capture}>
Scan Frame
</button>

{result && (

<div style={{marginTop:"20px"}}>

<h3>Result: {result.label}</h3>

<p>
Confidence: {(result.confidence*100).toFixed(1)}%
</p>

</div>

)}

</div>

</MainLayout>

)

}