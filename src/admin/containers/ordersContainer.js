import React from "react";
import {connect} from "react-redux";
import {getOrders, getOrdersAPI} from "@astore/ordersReducer";
import Orders from "@acomponents/orders/orders";

class OrdersContainer extends React.Component {
    componentDidMount() {
        this.props.getOrdersAPI();
    }

    render() {
        return <Orders orders={this.props.orders}/>
    }
}

export default connect(state=>({orders:state.orders.orders}), {getOrders, getOrdersAPI})(OrdersContainer);