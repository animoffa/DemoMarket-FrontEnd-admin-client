import React from "react";
import {connect} from "react-redux";
import Sidebar from "@ccomponents/sidebarClient/sidebarClient";
import {getCategories,getCategoriesAPI} from "../../common/redux/reducers/categoriesReducer";

class SidebarContainer extends React.Component {
    componentDidMount() {
        this.props.getCategoriesAPI();
    }

    render() {
        return <Sidebar categories={this.props.categories}/>
    }
}

export default connect(state=>({categories: state.categories.categories}), {
    getCategoriesAPI,
    getCategories,
})(SidebarContainer);