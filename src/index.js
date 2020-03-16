import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import Nav from './Nav';
import Footer from './Footer';
import Cart from './Cart';
import Login from './Login';
import Favorite from './Favorite';
import ProductDetail from './ProductDetail';
import ErrorBoundary from './ErrorBoundary';
import User from './User';
import SignUp from './SignUp';

import store from './store';
import {Provider} from 'react-redux';

import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';
import LoginAuth from './LoginAuth';

const routing = (
  <AuthProvider>
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Nav />
        <hr />
        <div className="container">
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/home" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LoginAuth} />
              {/* <Route path="/user" component={User} /> */}
              <PrivateRoute exact path="/user" component={User} />
              <Route path="/favorite" component={Favorite} />
              <Route path="/cart" component={Cart} />
              <Route path="/product/details/:id" component={ProductDetail} />
            </Switch>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  </AuthProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
