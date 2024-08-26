import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  const [products, setProducts] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://your-backend-url'); // Replace with your backend URL
    setSocket(newSocket);

    newSocket.on('productUpdate', (updatedProducts) => {
      setProducts(updatedProducts);
    });

    fetch('/api/products') // Replace with your backend API endpoint
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

    return () => newSocket.disconnect();
  }, []);

  const handleProductSale = (productId) => {
    fetch('/api/sale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    })
    .then((res) => res.json())
    .then((data) => {
      // Handle success or error
    });
  };

  return (
    <div>
      <h1>POS & Inventory System</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleProductSale(product.id)}>Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;