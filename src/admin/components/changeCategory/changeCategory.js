import React from "react";
import List from "../../../common/components/list/list";
import ChangeText from "./changeText";
import edit from "../../../images/icons8-редактировать-26.png";
import categoriesCss from "../categoriesAdmin/categories.module.css";

let ChangeCategory = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <div className={categoriesCss.editText}>
            <ChangeText status={props.category.name} UpdateStatus={props.updateCategory} id={props.category._id}
                        Description={props.category.description} Products={props.category.products} fontSize={"26px"}/>
            <img alt="edit" src={edit} style={{marginLeft: "14px", width: "20px", height: "20px", marginTop: "7px"}}/>
        </div>
        <div className={categoriesCss.editText}>
            <ChangeText status={props.category.description} UpdateStatus={props.updateCategory} id={props.category._id}
                        Name={props.category.name} Products={props.category.products} fontSize={"22px"}
                        isDescription={true}/>
            <img alt="edit" src={edit} style={{marginLeft: "14px", width: "20px", height: "20px", marginTop: "7px"}}/>
        </div>
        <div>
            <div className={categoriesCss.Categories}>
                <List productName="Название продукта" Productscount="Цена"/>
                {
                    props.products.map(product => {
                            if (product.category === props.category._id)
                                return <List productName={product.name} Productscount={product.price} id={product._id}/>
                        }
                    )
                }
            </div>
        </div>
    </div>)
};
export default ChangeCategory;