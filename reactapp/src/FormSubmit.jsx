import React from 'react'
function submitForm(evt)
{ evt.preventDefault();
    console.log("The form is submitted");
}

function FormSubmit() {
  return (
    <form onSubmit={submitForm}> 
        <button>Click Me!</button>
    </form>
  )
}

export default FormSubmit