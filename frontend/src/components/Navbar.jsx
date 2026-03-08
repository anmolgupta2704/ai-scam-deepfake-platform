import { useEffect, useState } from "react"

export default function Navbar(){

const [user,setUser] = useState({})

useEffect(()=>{

async function loadUser(){

const token = localStorage.getItem("token")

if(!token) return

const res = await fetch("http://localhost:5000/api/user/me",{
headers:{
Authorization:"Bearer "+token
}
})

const data = await res.json()

setUser(data)

}

loadUser()

},[])

return(

<div className="navbar">

<div className="nav-left">
AI Scam & Deepfake Detection
</div>

<div className="nav-right">

<span className="user-name">
👤 {user.name|| "User"}
</span>

</div>

</div>

)

}