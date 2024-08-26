import React, { useState, useEffect } from 'react';
import { fetchProducts, createOrder } from '../services/api';

const OrderForm = () => {
    const [products, setProducts] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetchProducts();
            setProducts(response.data);
        };
        loadProducts();
    }, []);

    const addOrderItem = () => {
        setOrderItems([...orderItems, { productId: '', quantity: 1 }]);
    };

    const handleOrderItemChange = (index, field, value) => {
        const items = [...orderItems];
        items[index][field] = value;
        setOrderItems(items);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = { userId, items: orderItems };
        try {
            await createOrder(order);
            setUserId('');
            setOrderItems([]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID</label>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
                <label>Order Items</label>
                {orderItems.map((item, index) => (
                    <div key={index}>
                        <select
                            value={item.productId}
                            onChange={(e) => handleOrderItemChange(index, 'productId', e.target.value)}
                        >
                            <option value="">Select product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.name}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleOrderItemChange(index, 'quantity', e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={addOrderItem}>Add Item</button>
            </div>
            <button type="submit">Create Order</button>
        </form>
    );
};

export default OrderForm;
