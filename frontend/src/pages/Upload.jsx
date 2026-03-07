import MainLayout from "../layout/MainLayout"
import "../styles/dashboard.css"

export default function Upload(){

return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">
Upload File
</h1>

<p className="page-sub">
Upload media to detect scam or deepfake
</p>

<div className="upload-box">

<input type="file"/>

<button className="btn">
Scan File
</button>

</div>

</div>

</MainLayout>

)

}