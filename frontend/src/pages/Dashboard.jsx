import MainLayout from "../layout/MainLayout";
import StatCard from "../components/StatCard";
import "../styles/dashboard.css";

export default function Dashboard(){

return(

<MainLayout>

<h1 className="dashboard-title">
Security Overview
</h1>

<p className="dashboard-sub">
Real-time deepfake & scam detection statistics
</p>
<div className="cards">

<StatCard title="Total Scans" value="142"/>
<StatCard title="Threats Detected" value="37"/>
<StatCard title="Safe Files" value="105"/>

</div>

</MainLayout>

)

}