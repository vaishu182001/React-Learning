import React, { useState } from 'react';

function ArrayModifyExample() {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  const modifyItem = (uuidToModify, newName) => {
    // We will have to map through the items and modify the item with the specified UUID
    const updatedItems = items.map(item =>
      item.id === uuidToModify ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Array Modify Example</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => modifyItem(item.id, 'Modified Name')}>Modify</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayModifyExample;