import AuthLayout from "../layout/AuthLayout";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

export default function Login(){

const navigate = useNavigate()

function login(){

localStorage.setItem("token","123")
navigate("/dashboard")

}

return(

<AuthLayout>

<div className="login-box">

<h2>Secure Login</h2>

<input placeholder="Email"/>

<input type="password" placeholder="Password"/>

<button onClick={login}>Login</button>

</div>

</AuthLayout>

)

}