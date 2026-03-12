import { useState } from "react"
import MainLayout from "../layout/MainLayout"
import "../styles/settings.css"

export default function Settings(){

const [darkMode,setDarkMode] = useState(false)
const [notifications,setNotifications] = useState(true)

function exportReport(){

window.open("http://localhost:5000/api/scan/export")

}

async function clearHistory(){

const confirm = window.confirm("Clear all scan history?")

if(!confirm) return

await fetch("http://localhost:5000/api/scan/clear",{
method:"DELETE"
})

alert("Scan history cleared")

}

return(

<MainLayout>

<div className="settings-card">

<h1>Settings</h1>

{/* PROFILE */}

<div className="settings-section">

<h2>Profile</h2>

<div className="settings-buttons">

<button className="btn">
Upload Profile Photo
</button>

<button className="btn">
Change Email
</button>

</div>

</div>


{/* SECURITY */}

<div className="settings-section">

<h2>Security</h2>

<div className="settings-buttons">

<button className="btn">
Change Password
</button>

<button className="btn danger">
Logout All Devices
</button>

</div>

</div>


{/* PREFERENCES */}

<div className="settings-section">

<h2>Preferences</h2>

<label className="toggle">

<input
type="checkbox"
checked={darkMode}
onChange={()=>setDarkMode(!darkMode)}
/>

<span>Dark Mode</span>

</label>


<label className="toggle">

<input
type="checkbox"
checked={notifications}
onChange={()=>setNotifications(!notifications)}
/>

<span>Email Notifications</span>

</label>

</div>


{/* SYSTEM */}

<div className="settings-section">

<h2>System</h2>

<div className="settings-buttons">

<button
className="btn"
onClick={exportReport}
>
Export Scan Report
</button>

<button
className="btn danger"
onClick={clearHistory}
>
Clear Scan History
</button>

</div>

</div>

</div>

</MainLayout>

)

}