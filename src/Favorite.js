import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const Favorite = (props) => {
    let favoriteProducts = props.products.filter(obj => props.favorite.includes(obj.id));
    return (
        <div className="row mb-5 pb-5">
            <div className="col-12 col-sm-9">
                <h2 className="w-100 mb-4">Favorite Products</h2>
                <Product products={favoriteProducts} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        favorite: state.favoriteReducer,
        products: state.productReducer
    }
}

export default connect(mapStateToProps, null)(Favorite);