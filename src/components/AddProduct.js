import React, { useState } from 'react';
import { createProduct } from '../services/api';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = { name, description, price, stock };
        try {
            await createProduct(product);
            setName('');
            setDescription('');
            setPrice('');
            setStock('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Stock</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
