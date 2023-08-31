import React, { useState } from 'react';

function ShoppingList() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddProduct = () => {
    if (productName && quantity) {
      const newProduct = { name: productName, quantity: quantity };
      setProducts([...products, newProduct]);
      setProductName('');
      setQuantity('');
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={handleProductNameChange}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
