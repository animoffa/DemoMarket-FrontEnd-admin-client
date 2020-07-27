import React from "react";
import {connect} from "react-redux";
import {getCategoryByID, getCategoriesByIDAPI, updateCategoryById} from "@astore/categoriesReducer";
import {getProductsAPI} from "@astore/productsReducer"
import ChangeCategory from "@acomponents/changeCategory/changeCategory";
import Preloader from "../../common/components/preloader/preloader";

class ChangeCategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.getCategoriesByIDAPI(this.props.id);
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