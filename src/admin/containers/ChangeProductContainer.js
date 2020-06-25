import React from "react";
import {connect} from "react-redux";
import {getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct} from "@astore/ProductsReducer";
import {getCategoriesAPI} from "@astore/CategoriesReducer";
import ChangeProduct from "@acomponents/ChangeProduct/ChangeProduct";
import Preloader from "../../common/components/Preloader/Preloader";

class ChangeProductContainer extends React.Component {
    componentDidMount() {
        let id = window.location.pathname.slice(14);
        this.props.getProductByIDAPI(id);
        this.props.getCategoriesAPI();
    }

    componentWillUnmount() {
        this.props.unmountProduct();
    }

    render() {
        if (!this.props.name || !this.props.categories) {
            return <Preloader/>
        }
        return <ChangeProduct state={this.props} UpdateProduct={this.props.UpdateProductAPI}/>
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.Categories.categories,
        name: state.Products.name,
        description: state.Products.description,
        price: state.Products.price,
        color: state.Products.color,
        wireless: state.Products.wireless,
        backlight: state.Products.backlight,
        producer: state.Products.producer,
        category: state.Products.category,
        id: state.Products.id,

    }
};

export default connect(mapStateToProps, {
    getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct, getCategoriesAPI
})(ChangeProductContainer);