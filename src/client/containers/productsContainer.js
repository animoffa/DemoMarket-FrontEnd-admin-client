import React from "react";
import {connect} from "react-redux";
import {getProducts, getProductsAPI, deleteProductAPI, addProductAPI} from "../../common/redux/reducers/productsReducer";
import Products from "@ccomponents/products/products";

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
        const {products, productsCount, currentPage, pageSize,categoryID} = this.props;

        return <Products products={products}  onPageChanged={this.onPageChanged}
                         productsCount={productsCount} pageSize={pageSize}
                         currentPage={currentPage} categoryId={categoryID}/>
    }
}

let mapStateToProps = ({products: {products, productsCount, pageSize, currentPage}}) => {
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
})(ProductsClientContainer);