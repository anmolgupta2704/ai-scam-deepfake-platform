import MainLayout from "../layout/MainLayout"
import "../styles/dashboard.css"

export default function Profile(){

return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">
Profile
</h1>

<p className="page-sub">
User profile settings
</p>

<div>

<label>Name</label>
<input className="input"/>

<label>Email</label>
<input className="input"/>

<button className="btn">
Update Profile
</button>

</div>

</div>

</MainLayout>

)

}