import React from 'react'
import { useState } from 'react';
function Toggler() {
    const [istruely,togglerFunc]=useState(true);
    const useTogglerFunc=()=>
    {
        togglerFunc(!istruely);
    }
  return (
    <div>
        <p onClick={useTogglerFunc}>
            {istruely?":)":":("}</p>
        
    </div>
  )
}

export default Toggler