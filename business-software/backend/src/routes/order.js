const express = require('express');
const router = express.Router();
const { Order, OrderItem, Product } = require('../models');

router.post('/create', async (req, res) => {
    const { userId, items } = req.body;
    try {
        const order = await Order.create({ userId, totalAmount: 0, status: 'pending' });
        let totalAmount = 0;
        for (const item of items) {
            const product = await Product.findByPk(item.productId);
            if (product && product.stock >= item.quantity) {
                await OrderItem.create({ orderId: order.id, productId: item.productId, quantity: item.quantity, price: product.price });
                totalAmount += product.price * item.quantity;
                product.stock -= item.quantity;
                await product.save();
            } else {
                throw new Error('Insufficient stock for product');
            }
        }
        order.totalAmount = totalAmount;
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
