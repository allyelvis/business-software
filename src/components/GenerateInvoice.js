import React, { useState } from 'react';
import { generateInvoice } from '../services/api';

const GenerateInvoice = () => {
    const [orderId, setOrderId] = useState('');
    const [invoiceData, setInvoiceData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await generateInvoice(orderId);
            setInvoiceData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Order ID</label>
                    <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
                </div>
                <button type="submit">Generate Invoice</button>
            </form>
            {invoiceData && (
                <div>
                    <h3>Invoice Details</h3>
                    <p>Invoice Number: {invoiceData.invoice.invoiceNumber}</p>
                    <p>Total Amount: {invoiceData.invoice.totalAmount}</p>
                    <p>EBMS Response: {invoiceData.ebmsResponse.message}</p>
                </div>
            )}
        </div>
    );
};

export default GenerateInvoice;
