const express = require('express');
const router = express.Router();
const { Invoice, Order } = require('../models');
const axios = require('axios');

router.post('/generate', async (req, res) => {
    const { orderId } = req.body;
    try {
        const order = await Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');

        const invoice = await Invoice.create({ orderId: order.id, totalAmount: order.totalAmount, invoiceNumber: `INV-${Date.now()}` });
        
        // Post to EBMS Burundi
        const response = await axios.post('https://ebms.obr.gov.bi:9443/ebms_api/addInvoice', invoice, {
            headers: { Authorization: `Bearer ${process.env.EBMS_TOKEN}` }
        });

        res.status(201).json({ invoice, ebmsResponse: response.data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
