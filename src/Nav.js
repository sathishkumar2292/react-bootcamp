import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {auth} from './services/firebase';
const Nav = (props) => {
  function signOut(e) {
    e.preventDefault();
    console.log('signOut');
    auth.signOut();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart <span className="bg-danger text-white badge badge-light">{props.cart.length > 0 ? props.cart.length : ''}</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorite">Favorite <span className="bg-danger text-white badge badge-light">{props.favorites.length > 0 ? props.favorites.length : ''}</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user">User</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={(e) => signOut(e)}>Sign out</a>
          </li>
        </ul>
      </div>
    </nav>
  );

}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteReducer,
    cart: state.cartReducer
  }
}

export default connect(mapStateToProps, null)(Nav);