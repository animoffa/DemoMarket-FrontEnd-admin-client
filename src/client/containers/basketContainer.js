import React from "react";
import {connect} from "react-redux";
import Basket from "@ccomponents/basket/basket"
import {getUserByID} from "@astore/usersReducer";
import {getProductsAPI} from "@astore/productsReducer";
import {getOrdersAPI} from "@astore/ordersReducer";

import Preloader from "../../common/components/preloader/preloader";

class BasketContainer extends React.Component {
    componentDidMount() {
        this.props.getProductsAPI();
        this.props.getOrdersAPI();
    }

    render() {
        if (!this.props.mail||!this.props.products||!this.props.orders) {
            return <Preloader/>
        }
        const {basket,mail,name,products,orders,id}=this.props;
        return <Basket mail={mail} name={name} basket={basket}
                       products={products} orders={orders} id={id}/>
    }
}

let mapStateToProps = (state) => {
    let {name,basket,id,mail}=state.auth.user;
    return {
        name, basket, mail,id,
        products:state.products.products,
        orders:state.orders.orders,
    }
};

export default connect(mapStateToProps, {
    getUserByID,
    getProductsAPI,
    getOrdersAPI
})(BasketContainer);