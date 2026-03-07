import "../styles/layout.css";
import { NavLink } from "react-router-dom";

export default function Sidebar(){

return(

<div className="sidebar">

<div className="logo">
AI Shield
</div>

<div className="menu">

<NavLink to="/dashboard">Dashboard</NavLink>

<NavLink to="/upload">Upload</NavLink>

<NavLink to="/reports">Reports</NavLink>

<NavLink to="/profile">Profile</NavLink>

</div>

</div>

)

}