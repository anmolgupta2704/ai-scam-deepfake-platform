import { useEffect,useState } from "react"
import MainLayout from "../layout/MainLayout"
import "../styles/profile.css"
export default function Profile(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")

useEffect(()=>{

async function loadUser(){

const token = localStorage.getItem("token")

const res = await fetch("http://localhost:5000/api/user/me",{
headers:{
Authorization:"Bearer "+token
}
})

const data = await res.json()

setName(data.name)
setEmail(data.email)

}

loadUser()

},[])


function updateProfile(){

fetch("http://localhost:5000/api/user/update",{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:"Bearer "+localStorage.getItem("token")
},

body:JSON.stringify({
name,
email
})

})

alert("Profile Updated")

}


return(

<MainLayout>

<div className="page-card">

<h1 className="page-title">Profile</h1>

<p className="page-sub">
User profile settings
</p>

<label>Name</label>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<label>Email</label>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button
className="btn"
onClick={updateProfile}
>

Update Profile

</button>

</div>

</MainLayout>

)

}