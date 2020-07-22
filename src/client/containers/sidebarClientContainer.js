import React from 'react';
import {connect} from "react-redux";
import Sidebar from "@ccomponents/SidebarClient/sidebarClient";
import {getCategories,getCategoriesAPI} from "../../redux/CategoriesReducer";

class SidebarContainer extends React.Component {
    componentDidMount() {
        this.props.getCategoriesAPI();
    }

    render() {
        return <Sidebar categories={this.props.categories}/>
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
};
export default connect(mapStateToProps, {
    getCategoriesAPI,
    getCategories,
})(SidebarContainer);