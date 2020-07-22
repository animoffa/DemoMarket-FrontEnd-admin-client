import {connect} from "react-redux";
import {logout} from "@astore/AuthReducer"
import Header from "./header";
import React from "react";

class CategoriesContainer extends React.Component {


    render() {
        return <Header logout={this.props.logout}/>
    }
}

let mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {
    logout
})(CategoriesContainer);