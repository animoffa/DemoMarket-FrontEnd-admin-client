import React from "react";
import {connect} from "react-redux";
import Categories from "@acomponents/categoriesAdmin/categories";
import {getCategories, getCategoriesAPI, deleteCategoryAPI, addCategoryAPI} from "@astore/categoriesReducer";

class CategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.getCategoriesAPI();
    }

    render() {
        return <Categories categories={this.props.categories}
                           delete={this.props.deleteCategoryAPI}
                           add={this.props.addCategoryAPI}/>
    }
}

export default connect(state=>({categories:state.categories.categories}), {
    getCategoriesAPI,
    getCategories,
    addCategoryAPI,
    deleteCategoryAPI
})(CategoriesContainer);