import React from 'react';
import {connect} from "react-redux";
import Basket from "../components/basket/Basket"
import {getUserByID} from "@astore/UsersReducer";
import {getProductsAPI} from "@astore/ProductsReducer";

import Preloader from "../../common/components/Preloader/Preloader";

class BasketContainer extends React.Component {
    componentDidMount() {
        this.props.getUserByID();
        this.props.getProductsAPI();
    }

    render() {
        if (!this.props.mail||!this.props.products) {
            return <Preloader/>
        }
        const {basket,mail,name,products}=this.props;
        return <Basket mail={mail} name={name} basket={basket} products={products}/>
    }
}

let mapStateToProps = (state) => {
    return {
        name:state.Users.name,
        basket:state.Users.basket,
        mail:state.Users.mail,
        products:state.Products.products,
    }
};

export default connect(mapStateToProps, {
    getUserByID,
    getProductsAPI
})(BasketContainer);