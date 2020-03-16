import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class ProductDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            product: {}
        }
    }
    componentWillMount() {
        const product = this.props.products.filter(obj => obj.id == this.props.match.params.id);
        this.setState({ product: product[0] });
    }
    render() {
        let cartProduct = (this.state.product && this.props.cart.includes(this.state.product.id))
                            ? <button className="btn btn-danger mr-3" onClick={() => this.props.addCart(this.state.product.id)}>Remove Cart</button>
                            : <button className="btn btn-primary mr-3" onClick={() => this.props.addCart(this.state.product.id)}>Add Cart</button>;
        let favProduct = (this.state.product && this.props.favorites.includes(this.state.product.id))
                            ? <button className="btn btn-danger mr-3" onClick={() => this.props.addFavorite(this.state.product.id)}>Remove Favorite</button>
                            : <button className="btn btn-primary mr-3" onClick={() => this.props.addFavorite(this.state.product.id)}>Add Favorite</button>;

        return (
            <>
                {this.state.product &&
                    <div className="col-12">
                        <div className="row">
                            <h2 className="text-primary text-center w-100 mb-5 text-capitalize">{this.state.product.name}</h2>
                            <div className="pimage col-3 p-0 mb-4 shadow bg-white rounded">
                                <img src={require(`${this.state.product.image}`)} alt={this.state.product.name} />
                            </div>
                            <div className="col-12 col-sm-9">
                                <p className="text-primary mb-1 font-weight-bold">{this.state.product.name}</p>
                                <p>{this.state.product.price}</p>
                                <p>{this.state.product.description}</p>
                                {cartProduct}
                                {favProduct}
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteReducer,
        cart: state.cartReducer,
        products: state.productReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (id) => {
            dispatch(actions.addFavorite(id));
        },
        addCart: (id) => {
            dispatch(actions.addCart(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);