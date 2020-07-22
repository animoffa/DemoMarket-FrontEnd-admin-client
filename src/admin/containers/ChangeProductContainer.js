import React from "react";
import {connect} from "react-redux";
import {getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct} from "@astore/ProductsReducer";
import {getCategoriesAPI} from "@astore/CategoriesReducer";
import ChangeProduct from "@acomponents/ChangeProduct/ChangeProduct";
import Preloader from "../../common/components/Preloader/Preloader";

class ChangeProductContainer extends React.Component {
    componentDidMount() {
        // TODO: REACT ROUTER SEE this.props.match AND withRouter
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
        categories: state.categories.categories,
        name: state.products.name,
        description: state.products.description,
        price: state.products.price,
        color: state.products.color,
        wireless: state.products.wireless,
        backlight: state.products.backlight,
        producer: state.products.producer,
        category: state.products.category,
        id: state.products.id,

    }
};

export default connect(mapStateToProps, {
    getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct, getCategoriesAPI
})(ChangeProductContainer);