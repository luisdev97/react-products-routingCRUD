import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new-product" component={ ProductsList }/>
        
      </Switch>
    </Router>
  );
}

export default App;
