import { useEffect,useState } from "react"
import MainLayout from "../layout/MainLayout"

import { Pie, Bar } from "react-chartjs-2"

import {
Chart as ChartJS,
ArcElement,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(
ArcElement,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
)

export default function Dashboard(){

const [stats,setStats] = useState({
total:0,
threats:0,
safe:0
})

useEffect(()=>{

fetch("http://localhost:5000/api/scan/stats")
.then(res=>res.json())
.then(data=>setStats(data))

},[])

const pieData = {
labels:["Threats","Safe Files"],
datasets:[
{
data:[stats.threats,stats.safe],
backgroundColor:["#ff4d4d","#00c853"]
}
]
}

const barData = {
labels:["Total","Threats","Safe"],
datasets:[
{
label:"Scans",
data:[stats.total,stats.threats,stats.safe],
backgroundColor:["#3f51b5","#ff4d4d","#00c853"]
}
]
}
const [recent,setRecent] = useState([])
useEffect(()=>{

fetch("http://localhost:5000/api/scan/stats")
.then(res=>res.json())
.then(data=>setStats(data))

fetch("http://localhost:5000/api/scan/recent")
.then(res=>res.json())
.then(data=>setRecent(data))

},[])
return(

<MainLayout>

<div className="dashboard">

<h1>Security Overview</h1>

<div className="cards">

<div className="card">
<h3>Total Scans</h3>
<h2>{stats.total}</h2>
</div>

<div className="card">
<h3>Threats Detected</h3>
<h2>{stats.threats}</h2>
</div>

<div className="card">
<h3>Safe Files</h3>
<h2>{stats.safe}</h2>
</div>

</div>

<div style={{display:"flex",gap:"40px",marginTop:"40px"}}>

<div style={{width:"40%"}}>
<h3>Threat Distribution</h3>
<Pie data={pieData}/>
</div>

<div style={{width:"60%"}}>
<h3>Detection Overview</h3>
<Bar data={barData}/>
</div>

</div>
<div className="recent-section">

<h3>Recent Scans</h3>

<table className="recent-table">

<thead>
<tr>
<th>File</th>
<th>Result</th>
<th>Confidence</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{recent.map(scan=>(
<tr key={scan._id}>

<td>{scan.fileName}</td>

<td className={scan.result==="Deepfake"?"danger":"safe"}>
{scan.result}
</td>

<td>{(scan.confidence*100).toFixed(1)}%</td>

<td>{new Date(scan.date).toLocaleDateString()}</td>

</tr>
))}

</tbody>

</table>

</div>
</div>

</MainLayout>

)

}