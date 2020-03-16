import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart, faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import * as actions from './actions/actions';

const Product = props => {
    let productList = props.products.map((prod, key) => {
        let cartProduct = props.cart.includes(prod.id) ? 'text-danger' : 'text-primary';
        let cartIcon = props.cart.includes(prod.id) ? faCartArrowDown : faCartPlus;
        let favProduct = props.favorites.includes(prod.id) ? 'text-danger' : 'text-primary';
        return (
            <div key={key} className="col-6 col-md-4 product-list mb-5">
                <div className="pimage">
                    <img src={require(`${prod.image}`)} alt={prod.name} />
                </div>
                <div className="shadow p-2 bg-white rounded border border-top-0">
                    <p className="text-primary mb-1 font-weight-bold">{prod.name}</p>
                    <p>{prod.price}
                        <FontAwesomeIcon className={favProduct +' ml-3'} icon={faHeart} onClick={() => props.addFavorite(prod.id)} />
                        <FontAwesomeIcon className={cartProduct +' ml-3'} icon={cartIcon} onClick={() => props.addCart(prod.id)} />
                    </p>
                    <p>{prod.description}</p>
                    <Link to={"/product/details/" + prod.id}><button className="btn btn-primary w-100 mb-2">View Detail</button></Link>
                    {props.remove && <button className="btn btn-primary w-100" value={prod.id} onClick={() => props.removeProducts(prod.id)}>Remove</button>}
                </div>
            </div>
        )
    });

    return (
        <div className="row">
            {productList}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteReducer,
        cart: state.cartReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProducts: (id) => {
            dispatch(actions.removeProduct(id));
        },
        addFavorite: (id) => {
            dispatch(actions.addFavorite(id));
        },
        addCart: (id) => {
            dispatch(actions.addCart(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);