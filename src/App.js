import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/Modal';
import PhoneBrand from './components/PhoneBrand';
import Favorite from './components/favorites/Favorite';

function App() {
  return (
   <Fragment>
     <Navbar />
     <Switch>
     <Route exact path='/' component={ProductList} />
      <Route exact path='/details' component={Details} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/favorites' component={Favorite} />
      <Route exact component={Default} />
     </Switch>
     <Modal />
     
   </Fragment>
  );
}

export default App;
