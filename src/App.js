import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/signInUp/signInUp.component'

function App() {
  return (
    <div className="">
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInUp}
      </Switch>
    </div>
  );
}

export default App;
