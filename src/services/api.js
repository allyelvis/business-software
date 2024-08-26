import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (data) => api.post('/auth/register', data);
export const fetchProducts = () => api.get('/products');
export const createProduct = (data) => api.post('/products/add', data);
export const createOrder = (data) => api.post('/orders/create', data);
export const generateInvoice = (orderId) => api.post('/invoices/generate', { orderId });
