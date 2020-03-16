import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import $ from 'jquery';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            msg: '',
        };
        this.savePost = this.savePost.bind(this);
    }
    componentDidMount() {
        console.log('componentDidMount');
        $('.product-list:first-child').addClass('shadow p-2 border-primary bg-white rounded border');
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.props.fetchProduct();
    }
    savePostCb = () => {
        setTimeout(() => {
            document.getElementById("addProductForm").reset();
            document.getElementsByClassName("close")[0].click();
            this.setState({ msg: '' });
        }, 1000)

    }
    savePost(e) {
        e.preventDefault();
        let payload = {
            id: this.props.products.length + 1,
            name: this.refs.name.value,
            price: '$' + this.refs.price.value,
            category: this.refs.category.value,
            description: this.refs.description.value,
            image: `./images/products/f-p-${Math.floor(Math.random() * 5) + 1}.png`,
            stocked: true,
        }
        this.props.addProduct(payload);
        this.setState({ msg: 'success' }, this.savePostCb);
    }
    render() {
        let message = this.state.msg ? <div className="alert alert-success" role="alert">{this.state.msg}</div> : '';
        return (
            <div className="row mb-5">
                <div className="col-12 col-sm-3">
                    <div className='full-width'>
                        <p id="count" className="text-primary">Available Products: <span>{this.props.products.length}</span></p>
                        <button type="button" data-toggle="modal" data-target="#addProduct" className="w-100 btn btn-outline-primary">Add Product</button>

                        <div className="modal fade" id="addProduct" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {message}
                                        <form id="addProductForm">
                                            <div className="form-group row m-0">
                                                <label htmlFor="name" className="text-left col-sm-12 col-form-label">Name</label>
                                                <div className="col-sm-11">
                                                    <input type="text" className="form-control" id="name" ref="name" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group row m-0">
                                                <label htmlFor="price" className="text-left col-sm-12 col-form-label">Price</label>
                                                <div className="col-sm-11">
                                                    <input type="text" className="form-control" id="price" ref="price" placeholder="Price" />
                                                </div>
                                            </div>
                                            <div className="form-group row m-0">
                                                <label htmlFor="category" className="text-left col-sm-12 col-form-label">Category</label>
                                                <div className="col-sm-11">
                                                    <select className="form-control" id="category" ref="category">
                                                        <option value="Sports">Sports</option>
                                                        <option value="Electronics">Electronics</option>
                                                        <option value="Fashion">Fashion</option>
                                                        <option value="Latest">Latest</option>
                                                        <option value="Demo">Demo</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row m-0">
                                                <label htmlFor="description" className="text-left col-sm-12 col-form-label">Description</label>
                                                <div className="col-sm-11">
                                                    <textarea className="form-control" id="description" ref="description" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="form-group row m-0">
                                                <label htmlFor="description" className="col-sm-12 col-form-label"></label>
                                                <div className="col-sm-11 text-right">
                                                    <button className="btn btn-primary" onClick={this.savePost}>Save</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                </div>
                <div className="col-12 col-sm-9">
                    <Product products={this.props.products} remove={true} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (prodObj) => {
            dispatch(actions.addProduct(prodObj));
        },
        fetchProduct: () => {
            dispatch(actions.fetchProduct());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);