import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Business Software</h1>
        <nav>
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/create-order">Create Order</Link></li>
                <li><Link to="/generate-invoice">Generate Invoice</Link></li>
            </ul>
        </nav>
    </div>
);

export default Home;
