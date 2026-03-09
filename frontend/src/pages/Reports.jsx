import { useEffect,useState } from "react"
import MainLayout from "../layout/MainLayout"

export default function Reports(){

const [scans,setScans] = useState([])

useEffect(()=>{

async function loadReports(){

const res = await fetch("http://localhost:5000/api/scan/history")

const data = await res.json()

setScans(data)

}

loadReports()

},[])

return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">Reports</h1>

<p className="page-sub">
All scan history will appear here
</p>

<table className="report-table">

<thead>

<tr>
<th>Preview</th>
<th>File</th>
<th>Status</th>
<th>Confidence</th>
<th>Date</th>
</tr>

</thead>

<tbody>

{scans.map((scan)=>(
<tr key={scan._id}>

<td>
<img
src={`http://localhost:5000/uploads/${scan.fileName}`}
width="60"
style={{borderRadius:"6px"}}
/>
</td>

<td>{scan.fileName}</td>

<td>{scan.result}</td>

<td>

<div style={{
background:"#333",
width:"120px",
height:"10px",
borderRadius:"10px"
}}>

<div style={{
width:`${scan.confidence*100}%`,
background:"#00c853",
height:"10px",
borderRadius:"10px"
}}/>

</div>

{(scan.confidence*100).toFixed(1)}%

</td>

<td>{new Date(scan.date).toLocaleDateString()}</td>

</tr>
))}

</tbody>

</table>

</div>

</MainLayout>

)

}