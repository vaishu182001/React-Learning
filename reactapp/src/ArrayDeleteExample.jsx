import React, { useState } from 'react';

function ArrayDeleteExample() {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  const deleteItem = (uuidToDelete) => {
    // Filter out the item with the specified UUID
    const updatedItems = items.filter(item => item.id !== uuidToDelete);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Array Delete Example</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayDeleteExample;
