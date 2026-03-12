import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar(){

const [open,setOpen] = useState(false)

const navigate = useNavigate()

function logout(){

localStorage.removeItem("token")

navigate("/login")

}

return(

<div className="navbar">

<div className="logo">
AI Scam & Deepfake Detection
</div>

<div className="profile-menu">

<div
className="profile-btn"
onClick={()=>setOpen(!open)}
>
Anmol ▼
</div>

{open && (

<div className="dropdown">

<div onClick={()=>navigate("/profile")}>
Profile
</div>

<div onClick={()=>navigate("/settings")}>
Settings
</div>

<div onClick={logout}>
Logout
</div>

</div>

)}

</div>

</div>

)

}