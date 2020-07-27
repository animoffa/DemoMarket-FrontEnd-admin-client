import React from "react";
import {connect} from "react-redux";
import {getProducts, getProductsAPI, deleteProductAPI, addProductAPI} from "@astore/productsReducer";
import Products from "@acomponents/products/products";

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
        let {products,deleteProductAPI,addProductAPI,productsCount,pageSize,currentPage}=this.props;
        return <Products products={products} delete={deleteProductAPI} add={addProductAPI} onPageChanged={this.onPageChanged}
                         productsCount={productsCount} pageSize={pageSize} currentPage={currentPage}/>

    }
}

let mapStateToProps = (state) => {
    let {products,productsCount,pageSize,currentPage} = state.products;
    return {
       products, productsCount,
        pageSize, currentPage,
    }
};

export default connect(mapStateToProps, {
    getProductsAPI,
    getProducts,
    deleteProductAPI,
    addProductAPI
})(ProductsContainer);