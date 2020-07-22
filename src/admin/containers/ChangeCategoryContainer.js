import React from 'react';
import {connect} from "react-redux";
import {getCategoryByID, getCategoriesByIDAPI, updateCategoryById} from "@astore/CategoriesReducer";
import {getProductsAPI} from "@astore/ProductsReducer"
import ChangeCategory from "@acomponents/ChangeCategory/ChangeCategory";
import Preloader from "../../common/components/Preloader/Preloader";

class ChangeCategoriesContainer extends React.Component {
    componentDidMount() {
        // TODO: REACT ROUTER SEE this.props.match AND withRouter
        let id = window.location.pathname.slice(15);
        this.props.getCategoriesByIDAPI(id);
        this.props.getProductsAPI();
    }


    render() {
        if (!this.props.category) {
            return <Preloader/>
        }
        return (
            <ChangeCategory category={this.props.category} updateCategory={this.props.updateCategoryById}
                            products={this.props.products}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        category: state.categories.category,
        products: state.products.products,
    }
};

export default connect(mapStateToProps, {
    getCategoriesByIDAPI,
    getCategoryByID,
    updateCategoryById,
    getProductsAPI
})(ChangeCategoriesContainer);