import React from "react";
import List from "../../../common/components/list/list";
import add from "../../../images/icons8-добавить-64.png";
import Paginator from "../../../common/components/pagination/paginator";
import categoriesCss from "../categoriesAdmin/categories.module.css";

let Products = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <div className={categoriesCss.title}>
            <h1 className={categoriesCss.title}>Продукты</h1>
            <img src={add} alt="Добавить" onClick={() => {
                props.add()
            }} style={{width: "40px", height: "40px", marginLeft: "10px"}}/>
        </div>
        <div>
            <div className={categoriesCss.Categories}>
                <List productName="Название продукта" Productscount="Цена"/>
                {
                    props.products.map(p =>
                        <List productName={p.name} key={p._id} Productscount={p.price ? p.price : "-"} id={p._id}
                              delete={() => props.delete(p._id)}/>
                    )
                }

            </div>
        </div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   productsCount={props.productsCount} pageSize={props.pageSize}/>
    </div>)
};
export default Products;