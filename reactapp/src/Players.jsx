import React from 'react'
import { useState } from 'react';

function Players() {
    const [num1,addPlayer1Score]=useState(0);
    const[num2,addPlayer2Score]=useState(0);
    const p1func=()=>{addPlayer1Score(num1+1)};
    const p2func=()=>{addPlayer2Score(num2+1)};
  return (
  

    <div>
        <p>The score of Vaishnavi is :{num1}</p>
        <p>The score of Madhavi is : {num2}</p>
        <br/>
        <button onClick={p1func}>Player 1</button>
        <button onClick={p2func}>Player 2</button>
    </div>
  )
}

export default Players