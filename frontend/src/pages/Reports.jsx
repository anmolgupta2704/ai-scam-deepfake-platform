import { useEffect,useState } from "react"
import MainLayout from "../layout/MainLayout"

export default function Reports(){

const [scans,setScans] = useState([])
const [search,setSearch] = useState("")
const [preview,setPreview] = useState(null)

useEffect(()=>{

loadReports()

},[])

async function loadReports(){

const res = await fetch("http://localhost:5000/api/scan/history")

const data = await res.json()

setScans(data)

}

async function deleteScan(id){

await fetch(`http://localhost:5000/api/scan/${id}`,{
method:"DELETE"
})

loadReports()

}

const filtered = scans.filter(scan=>
scan.fileName.toLowerCase().includes(search.toLowerCase())
)

return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">Reports</h1>

<input
type="text"
placeholder="Search file..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search-box"
/>

<table className="report-table">

<thead>
<tr>
<th>Preview</th>
<th>File</th>
<th>Status</th>
<th>Confidence</th>
<th>Date</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{filtered.map(scan=>(

<tr key={scan._id}>

<td>

<img
src={`http://localhost:5000/uploads/${scan.fileName}`}
width="50"
className="preview-img"
onClick={()=>setPreview(scan.fileName)}
/>

</td>

<td>{scan.fileName}</td>

<td className={scan.result==="Deepfake"?"danger":"safe"}>
{scan.result}
</td>

<td>{(scan.confidence*100).toFixed(1)}%</td>

<td>{new Date(scan.date).toLocaleDateString()}</td>

<td>

<a
href={`http://localhost:5000/uploads/${scan.fileName}`}
download
className="download-btn"
>
Download
</a>

<button
onClick={()=>deleteScan(scan._id)}
className="delete-btn"
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

{preview && (

<div className="modal" onClick={()=>setPreview(null)}>

<img
src={`http://localhost:5000/uploads/${preview}`}
className="modal-img"
/>

</div>

)}

</div>

</MainLayout>

)

}