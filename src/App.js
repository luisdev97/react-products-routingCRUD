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
  const [ reloadProducts, setReloadProducts ] = useState(true);

  const getProducts = async() => {
    const res = await axios.get('http://localhost:4000/restaurant');
    setProducts(res.data);
  }

  const getProductFromList = id => products.find( p => p.id === parseInt(id));

  useEffect(() => {
    if(reloadProducts){
      getProducts();
      setReloadProducts(false);
    }
    
  },[reloadProducts]);

  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>

          <Route path="/products/new" 
                 render={ () => <ProductsForm setReloadProducts={ setReloadProducts }/> }
          />
          <Route path="/products/edit/:id" 
                 render={ ({ match }) => <EditProductForm product={ getProductFromList(match.params.id) }/> }
          />
          
          <Route path="/products/:id" component={ Product }/>

          <Route path="/products" 
                 render={ () => <ProductsList products = { products } 
          /> }/>
                 
        </Switch>
      </main>

      <p className="mt-4 p2 text-center">
        All rights reserverd
      </p>
      
    </Router>
  );
}

export default App;
