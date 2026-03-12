import { useState } from "react"
import MainLayout from "../layout/MainLayout"
import "../styles/settings.css"

export default function Settings(){

const [darkMode,setDarkMode] = useState(false)
const [notifications,setNotifications] = useState(true)


// EXPORT REPORT
function exportReport(){
window.open("http://localhost:5000/api/scan/export")
}


// CLEAR HISTORY
async function clearHistory(){

const confirm = window.confirm("Clear all scan history?")
if(!confirm) return

await fetch("http://localhost:5000/api/scan/clear",{
method:"DELETE"
})

alert("Scan history cleared")
}


// CHANGE EMAIL
async function changeEmail(){

const email = prompt("Enter new email")

if(!email) return

await fetch("http://localhost:5000/api/user/change-email",{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:"Bearer "+localStorage.getItem("token")
},
body:JSON.stringify({email})
})

alert("Email updated")

}


// CHANGE PASSWORD
async function changePassword(){

const password = prompt("Enter new password")

if(!password) return

await fetch("http://localhost:5000/api/user/change-password",{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:"Bearer "+localStorage.getItem("token")
},
body:JSON.stringify({password})
})

alert("Password changed")

}


// LOGOUT ALL DEVICES
function logoutAll(){

localStorage.removeItem("token")

window.location.href="/login"

}


// DARK MODE
function toggleDark(){

setDarkMode(!darkMode)

document.body.classList.toggle("dark")

}


// UPLOAD PHOTO
async function uploadPhoto(e){

const file = e.target.files[0]

if(!file) return

const formData = new FormData()

formData.append("photo",file)

await fetch("http://localhost:5000/api/user/upload-photo",{
method:"POST",
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
},
body:formData
})

alert("Profile photo updated")

}


return(

<MainLayout>

<div className="settings-card">

<h1>Settings</h1>


{/* PROFILE */}

<div className="settings-section">

<h2>Profile</h2>

<div className="settings-buttons">

<label className="btn">
Upload Profile Photo
<input
type="file"
onChange={uploadPhoto}
style={{display:"none"}}
/>
</label>

<button className="btn" onClick={changeEmail}>
Change Email
</button>

</div>

</div>


{/* SECURITY */}

<div className="settings-section">

<h2>Security</h2>

<div className="settings-buttons">

<button className="btn" onClick={changePassword}>
Change Password
</button>

<button className="btn danger" onClick={logoutAll}>
Logout All Devices
</button>

</div>

</div>


{/* PREFERENCES */}
{/* 
<div className="settings-section">

<h2>Preferences</h2>

<label className="toggle">

<input
type="checkbox"
checked={darkMode}
onChange={toggleDark}
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
 */}

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