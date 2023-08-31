import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const handleButtonClick = () => {
    console.log('Button clicked in parent component');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onClick={handleButtonClick} />
    </div>
  );
}

export default ParentComponent;
