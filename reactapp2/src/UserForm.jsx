import React from 'react'
import { useState } from 'react'

function UserForm() {
    const [username,setUserName]=useState("V");
    const updateUserName=(evt)=>
    {    console.log("State change");
         setUserName(evt.target.value);
    }
   return (
    <div>
        <h2>Simple Form </h2> 
        <input type="text" value={username} onChange={updateUserName}/>
        <button>Submit</button>
    </div>
  )
}

export default UserForm