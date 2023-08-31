import React, { useState, useEffect } from 'react';

function ExampleWithUseEffect() {
  const [count, setCount] = useState(0);

  // useEffect hook with no dependencies
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <h1>Example with useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleWithUseEffect;
