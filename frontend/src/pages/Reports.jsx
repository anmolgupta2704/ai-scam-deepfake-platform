import MainLayout from "../layout/MainLayout"
import "../styles/dashboard.css"

export default function Reports(){

return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">
Reports
</h1>

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

<tr>
<td>video1.mp4</td>
<td>Safe</td>
<td>02 Mar</td>
</tr>

<tr>
<td>audio2.wav</td>
<td>Deepfake</td>
<td>01 Mar</td>
</tr>

</tbody>

</table>

</div>

</MainLayout>

)

}