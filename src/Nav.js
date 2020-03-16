import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {auth} from './services/firebase';
import { AuthContext } from './Auth';

const Nav = (props) => {
  function signOut(e) {
    e.preventDefault();
    console.log('signOut');
    auth.signOut();
  }

  let test = useContext(AuthContext);
  var currentUser = test ? test : {};
  const user = (currentUser && currentUser.email)
              ? <><li className="nav-item"><Link className="nav-link" to="/user">User ({currentUser.email})</Link></li><li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => signOut(e)}>Sign out</a></li></>
              : <li className="nav-item"><Link className="nav-link" to="/signup">Login/Register</Link></li>;
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
          {user}
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