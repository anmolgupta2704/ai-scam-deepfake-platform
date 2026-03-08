import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import "../styles/auth.css"

export default function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function handleRegister(){

const res = await fetch("http://localhost:5000/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

})

const data = await res.json()

alert("User created")

navigate("/")
}

return(

<AuthLayout>

<div className="login-box">

<h2>Create Account</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleRegister}>
Register
</button>

</div>

</AuthLayout>

)

}