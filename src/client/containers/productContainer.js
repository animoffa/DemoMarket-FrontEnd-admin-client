import React from "react";
import Preloader from "../../common/components/preloader/preloader";
import {connect} from "react-redux";
import {getProductByIDAPI} from "@astore/productsReducer";
import Product from "@ccomponents/product/Product";

class ProductContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.ProductID)
        this.props.getProductByIDAPI(this.props.ProductID);
    }

    render() {
        if (!this.props.name) {
            return <Preloader/>
        }
        const {name, description, price, color, wireless, backlight, producer, id, photos} = this.props;
        return <Product name={name} description={description} price={price} color={color} photos={photos}
                        wireless={wireless} backlight={backlight} producer={producer} id={id}/>
    }
}

let mapStateToProps = ({products: {name, description, price, color, wireless, backlight, producer, category, id, photos}}) => {
    return {
        name, description, price, color,
        wireless, backlight, producer,
        category, id, photos
    }
};

export default connect(mapStateToProps, {
    getProductByIDAPI
})(ProductContainer);