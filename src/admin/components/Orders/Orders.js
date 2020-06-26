import React from 'react';
import List from "../../../common/components/list/List";
import categoriesCss from "../CategoriesAdmin/Categories.module.css";

let Orders = (props) => {

    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Заказы</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <List categoryName={"ID Заказа"} Productscount={"ID Пользователя"} ProductsOfOrder={"ID Продукта"}
                      StausOfOrder={"Статус"}/>
                {
                    props.orders.map(p =>
                        <List productName={p._id} key={p._id} Productscount={p.userID} ProductsOfOrder={p.ProductsID}
                              StausOfOrder={p.status}/>
                    )
                }
            </div>
        </div>
    </div>)
};
export default Orders;