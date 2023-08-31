import React, { useState } from 'react'


export default function IntermediateState() {
    console.log("Rendered");
    const [num,incFunc]=useState(1);
    const incrementValues1=()=>
    { incFunc(num+1);

    }
    const incrementValues10=()=>
    { incFunc((prevstate)=>prevstate+10);

    }
  return (
    <div>
        <p>The value of the number is : {num}</p>
        <button onClick={incrementValues1}>+1</button>
        <button onClick={incrementValues10}>+10</button>
    </div>
  )
}
