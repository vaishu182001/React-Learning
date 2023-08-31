import React from 'react'
import { useState } from 'react';

function Playersusingobj() {
    const [scores,addPlayerScore]=useState({p1score:0,p2score:0});
    
    const player1Increment=()=>{
        addPlayerScore((score=>{
            return {...score,p1score:score.p1score+1};
        }))
    }
    const player2Increment=()=>{
        addPlayerScore((score=>{
            return {...score,p2score:score.p2score+1};
        }))
    }
  return (
  

    <div>
        <p>The score of Vaishnavi is :{scores.p1score}</p>
        <p>The score of Madhavi is : {scores.p2score}</p>
        <br/>
        <button onClick={player1Increment}>Player 1</button>
        <button onClick={player2Increment}>Player 2</button>
    </div>
  )
}

export default Playersusingobj;