import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import OrderForm from './components/OrderForm';
import GenerateInvoice from './components/GenerateInvoice';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" component={ProductList} />
                    <Route path="/add-product" component={AddProduct} />
                    <Route path="/create-order" component={OrderForm} />
                    <Route path="/generate-invoice" component={GenerateInvoice} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
