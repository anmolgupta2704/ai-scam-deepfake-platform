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
<th>File</th>
<th>Status</th>
<th>Date</th>
</tr>

</thead>

<tbody>

{scans.map((scan)=>(
<tr key={scan._id}>
<td>{scan.fileName}</td>
<td>{scan.result}</td>
<td>{new Date(scan.date).toLocaleDateString()}</td>
</tr>
))}

</tbody>

</table>

</div>

</MainLayout>

)

}