import React from 'react';
import './App.css';
import Layout from '../src/Components/Layout/Layout'
import BurgerBuilder from '../src/Containers/BurgerBuilder/BurgerBuilder'


function App() {
  return (
    <Layout>
        <BurgerBuilder />
    </Layout>
  );
}

export default App;
