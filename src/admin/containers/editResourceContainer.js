import React from "react"
import {Redirect} from "react-router-dom";

import ChangeCategoriesContainer from "@acontainers/changeCategoryContainer";
import ChangeProductContainer from "@acontainers/changeProductContainer";

export default class ResourceContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    renderContainer() {
        const {resource, id} = this.props.match.params

        switch (resource) {
            case "products":
                return <ChangeProductContainer id={id}/>
            case "categories":
                console.log(123)
                return <ChangeCategoriesContainer id={id}/>
            default:
                return <Redirect to="/admin/categories"/>
        }
    }

    render() {
        return (
            <>
                {this.renderContainer()}
            </>
        )
    }
}