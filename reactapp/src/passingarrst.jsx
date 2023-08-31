import React, { useState } from 'react';

function passingarrst() {
  // Initialize state with an empty array
  const [myArray, setMyArray] = useState([]);

  const addItem = () => {
    // Add a new item to the array
    setMyArray([...myArray, 'New Item']);
  };

  return (
    <div>
      <h1>Array State Example</h1>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default passingarrst;