import React from 'react';
import {connect} from "react-redux";
import Basket from "../components/basket/Basket"
import {getUserByID} from "@astore/UsersReducer";
import {getProductsAPI} from "@astore/ProductsReducer";
import {getOrdersAPI} from "@astore/OrdersReducer";

import Preloader from "../../common/components/Preloader/Preloader";

class BasketContainer extends React.Component {
    componentDidMount() {
        this.props.getUserByID();
        this.props.getProductsAPI();
        this.props.getOrdersAPI();
    }

    render() {
        if (!this.props.mail||!this.props.products||!this.props.orders) {
            return <Preloader/>
        }
        const {basket,mail,name,products,orders,id}=this.props;
        return <Basket mail={mail} name={name} basket={basket} products={products}
                       orders={orders} id={id}/>
    }
}

let mapStateToProps = (state) => {
    return {
        name:state.Users.name,
        basket:state.Users.basket,
        mail:state.Users.mail,
        products:state.Products.products,
        orders:state.Orders.orders,
        id:state.Users.id,
    }
};

export default connect(mapStateToProps, {
    getUserByID,
    getProductsAPI,
    getOrdersAPI
})(BasketContainer);