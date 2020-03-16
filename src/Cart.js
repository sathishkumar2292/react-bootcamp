import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const Cart = (props) => {
    let cartProducts = props.products.filter(obj => props.cart.includes(obj.id));
    let cartPrice = cartProducts.length > 0 ? cartProducts.reduce((total, price) => {
        total = total.price ? parseInt(total.price.substring(1)) : total;
        price = parseInt(price.price.substring(1));
        return total + price;
    }, 0) : 0;

    return (
        <div className="row">
            <div className="col-12 col-sm-9">
                <h2 className="w-100 mb-4">Cart Items</h2>
                {cartPrice!==0 && <b><p className="text-danger">Total price: ${cartPrice}</p></b>}
                <Product products={cartProducts} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer,
        products: state.productReducer
    }
}

export default connect(mapStateToProps, null)(Cart);