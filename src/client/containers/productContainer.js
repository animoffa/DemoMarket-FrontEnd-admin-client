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
        name: state.Products.name,
        description: state.Products.description,
        price: state.Products.price,
        color: state.Products.color,
        wireless: state.Products.wireless,
        backlight: state.Products.backlight,
        producer: state.Products.producer,
        category: state.Products.category,
        id: state.Products.id,
        photos:state.Products.photos
    }
};

export default connect(mapStateToProps, {
    getProductByIDAPI
})(ProductContainer);