import React from 'react';
import {connect} from "react-redux";
import {getProducts, getProductsAPI, deleteProductAPI, addProductAPI} from "../../redux/ProductsReducer";
import Products from "@ccomponents/Products/Products";

class ProductsClientContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getProductsAPI(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize} = this.props;
        this.props.getProductsAPI(page, pageSize);
    };

    render() {
        const {products, productsCount, currentPage, pageSize, location} = this.props;

        return <Products products={products}  onPageChanged={this.onPageChanged}
                         productsCount={productsCount} pageSize={pageSize}
                         currentPage={currentPage} categoryId={location.pathname.slice(10)}/>

    }
}

let mapStateToProps = ({Products: {products, productsCount, pageSize, currentPage}}) => {
    return {
        products,
        productsCount,
        pageSize,
        currentPage,
    }
};

export default connect(mapStateToProps, {
    getProductsAPI,
    getProducts,
    deleteProductAPI,
    addProductAPI
})(ProductsClientContainer);