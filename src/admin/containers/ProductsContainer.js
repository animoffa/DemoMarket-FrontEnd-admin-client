import React from 'react';
import {connect} from "react-redux";
import {getProducts, getProductsAPI, deleteProductAPI, addProductAPI} from "@astore/ProductsReducer";
import Products from "@acomponents/Products/Products";

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProductsAPI();
        const {currentPage, pageSize} = this.props;
        this.props.getProductsAPI(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize} = this.props;
        this.props.getProductsAPI(page, pageSize);
    };

    render() {
        return <Products products={this.props.products} delete={this.props.deleteProductAPI}
                         add={this.props.addProductAPI} onPageChanged={this.onPageChanged}
                         productsCount={this.props.productsCount} pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}/>

    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        productsCount: state.products.productsCount,
        pageSize: state.products.pageSize,
        currentPage: state.products.currentPage,
    }
};

export default connect(mapStateToProps, {
    getProductsAPI,
    getProducts,
    deleteProductAPI,
    addProductAPI
})(ProductsContainer);