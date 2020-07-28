import React from "react";
import {Redirect} from "react-router-dom";
import {AboutUs, ProductsClientContainer} from "@ccomponents/index";
import OrdersContainer from "@acontainers/ordersContainer";
import ProductContainer from "@ccontainers/productContainer";

export default class ResourceContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    renderContainer() {
        let param = this.props.match.params;
        switch (param.resource) {
            case "orders":
                return <OrdersContainer/>
            case "products":
                return <ProductsClientContainer categoryID={param.id}/>
            case "product":
                return <ProductContainer ProductID={param.id}/>
            case "about":
                return <AboutUs/>
            default:
                return <Redirect to="/products"/>
        }
    }

    render() {
        return (
            <>
                {this.renderContainer()}
            </>
        )
    }
}