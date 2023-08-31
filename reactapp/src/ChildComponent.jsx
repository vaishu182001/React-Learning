import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.onClick}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
