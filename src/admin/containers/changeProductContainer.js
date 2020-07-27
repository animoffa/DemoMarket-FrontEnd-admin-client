import React from "react";
import {connect} from "react-redux";
import {getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct} from "@astore/productsReducer";
import {getCategoriesAPI} from "@astore/categoriesReducer";
import ChangeProduct from "@acomponents/changeProduct/changeProduct";
import Preloader from "../../common/components/preloader/preloader";

class ChangeProductContainer extends React.Component {
    componentDidMount() {
        this.props.getProductByIDAPI(this.props.id);
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

export default connect(state=>({...state.products}), {
    getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct, getCategoriesAPI
})(ChangeProductContainer);