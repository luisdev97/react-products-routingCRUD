import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import ProductsList from './components/ProductsList';
import ProductsForm from './components/ProductsForm';
import EditProductForm from './components/EditProductForm';
import Product from './components/Product';
import Header from './components/Header';

function App() {

  const [ products, setProducts ] = useState([]);

  const getProducts = async() => {
    const res = await axios.get('http://localhost:4000/restaurant');
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>

          <Route path="/products/new" component={ ProductsForm }/>
          <Route path="/products/edit/:id" component={ EditProductForm }/>
          <Route path="/products/:id" component={ Product }/>
          <Route path="/products" 
                 render={ () => <ProductsList products = { products } /> }/>
                 
        </Switch>
      </main>

      <p className="mt-4 p2 text-center">
        All rights reserverd
      </p>
      
    </Router>
  );
}

export default App;
