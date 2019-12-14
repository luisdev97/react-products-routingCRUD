import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductsForm from './components/ProductsForm';
import EditProductForm from './components/EditProductForm';
import Product from './components/Product';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
          
          <Route path="/products/new" component={ ProductsForm }/>
          <Route path="/products" component={ ProductsList }/>
          <Route path="/edit-product/:id" component={ EditProductForm }/>
          <Route path="/products/:id" component={ Product }/>

        </Switch>
      </main>

      <p className="mt-4 p2 text-center">
        All rights reserverd
      </p>
      
    </Router>
  );
}

export default App;
