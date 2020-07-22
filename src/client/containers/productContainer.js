import React from 'react';
import Preloader from "../../common/components/Preloader/Preloader";
import {connect} from "react-redux";
import {getProductByIDAPI} from "@astore/ProductsReducer";
import Product from "@ccomponents/Product/Product";

class ProductContainer extends React.Component {
    componentDidMount() {
        let id = window.location.pathname.slice(9);
        this.props.getProductByIDAPI(id);
    }

    render() {
        if (!this.props.name) {
            return <Preloader/>
        }
        const {name,description,price,color,wireless,backlight,producer,id,photos}=this.props;
        return <Product name={name} description={description} price={price} color={color} photos={photos}
                        wireless={wireless} backlight={backlight} producer={producer} id={id}/>
    }
}

let mapStateToProps = (state) => {
    return {
        name: state.products.name,
        description: state.products.description,
        price: state.products.price,
        color: state.products.color,
        wireless: state.products.wireless,
        backlight: state.products.backlight,
        producer: state.products.producer,
        category: state.products.category,
        id: state.products.id,
        photos:state.products.photos
    }
};

export default connect(mapStateToProps, {
    getProductByIDAPI
})(ProductContainer);