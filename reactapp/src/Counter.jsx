import React from 'react'

function Counter() {
    let num=0;

  return (
    <div>
        <p>The value of the harcoded number  is : {num}</p>
        <button onClick={()=>{num=num+1;console.log(num);}}>Increment Value</button>
    </div>
  )
}

export default Counter