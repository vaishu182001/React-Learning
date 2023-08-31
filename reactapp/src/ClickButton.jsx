import React from 'react'
function click()
{
    console.log("You clicked the button!");
}

export default function ClickButton() {
  return (
    <div>
        <h2>This is an introduction to events</h2>
        <button onClick={click}>Click Me!</button>
        </div>
  )
}
