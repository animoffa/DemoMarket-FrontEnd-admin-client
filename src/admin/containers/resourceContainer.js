import React from "react"
import {Redirect} from "react-router-dom";

import UsersContainer from "@acontainers/usersContainer";
import ProductsContainer from "@acontainers/productsContainer";
import CategoriesContainer from "@acontainers/categoriesContainer";
import OrdersContainer from "@acontainers/ordersContainer";

export default class ResourceContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    renderContainer() {
        switch (this.props.match.params.resource) {
            case "users":
                return <UsersContainer/>
            case "products":
                return <ProductsContainer/>
            case "categories":
                return <CategoriesContainer/>
            case "orders":
                return <OrdersContainer/>
            default:
                return <Redirect to="/admin/categories"/>
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