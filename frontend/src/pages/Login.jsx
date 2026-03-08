import { useState } from "react"
import AuthLayout from "../layout/AuthLayout"
import "../styles/auth.css"
import { useNavigate } from "react-router-dom"

export default function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function login(){

const res = await fetch("http://localhost:5000/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

})

const data = await res.json()

if(data.token){

localStorage.setItem("token",data.token)

navigate("/dashboard")

}else{

alert("Login failed")

}

}

return(

<AuthLayout>

<div className="login-box">

<h2>Secure Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={login}>
Login
</button>

<p style={{marginTop:"15px"}}>

Don't have account?

<a href="/register"> Register</a>

</p>

</div>

</AuthLayout>

)

}