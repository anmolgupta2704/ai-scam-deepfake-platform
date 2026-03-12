import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import "../styles/profile.css"

export default function Profile(){

const navigate = useNavigate()

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


async function updateProfile(){

await fetch("http://localhost:5000/api/user/update",{

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

function logout(){

localStorage.removeItem("token")

navigate("/login",{replace:true})

}


async function deleteAccount(){

const confirmDelete = window.confirm("Delete your account permanently?")

if(!confirmDelete) return

await fetch("http://localhost:5000/api/user/delete",{
method:"DELETE",
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
})

localStorage.removeItem("token")

navigate("/login")

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


<hr className="divider"/>


<h2>Account</h2>

<div className="profile-actions">

<button className="logout-btn" onClick={logout}>
Logout
</button>

<button className="delete-btn" onClick={deleteAccount}>
Delete Account
</button>

</div>


</div>

</MainLayout>

)

}