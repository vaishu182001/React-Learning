import React from 'react'
import { useState } from 'react';

function Counterwithstate() {
    const [num,changeInc]=useState(10);
    const incrementFunc=()=>{
        changeInc(num+10);
    };
  return (
    
    <div>
        <h3>This is a demonstration for a state using useState</h3>
        <p>The value of the num is : {num}</p>
        <button onClick={incrementFunc}>Increment Me</button>
    </div>
  )
}

export default Counterwithstate