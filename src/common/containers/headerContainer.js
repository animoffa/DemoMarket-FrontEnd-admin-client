import {connect} from "react-redux";
import {logout} from "@astore/authReducer"
import Header from "../components/header/header";
import React from "react";

class CategoriesContainer extends React.Component {


    render() {
        return <Header logout={this.props.logout}/>
    }
}

export default connect(null, {logout})(CategoriesContainer);