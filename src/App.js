import React from 'react';
import './App.css';
import Layout from '../src/Hoc/Layout/Layout'
import BurgerBuilder from '../src/Containers/BurgerBuilder/BurgerBuilder'
import Checkout from '../src/Containers/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';
import Orders from './Containers/Order/Orders'


function App() {
  return (
    <Layout>
      {/* <BurgerBuilder />
        <Checkout /> */}
      <Switch>
        <Route path="/builder" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
