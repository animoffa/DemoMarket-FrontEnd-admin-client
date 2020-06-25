import React from 'react';
import List from "../list/List";
import categoriesCss from "../CategoriesAdmin/Categories.module.css";

let Users = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Пользователи</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <List productName={"Имя"} Productscount={"Заказы"} ProductsOfOrder={"Адрес"} StausOfOrder={"Имя"}/>
                {
                    props.users.map(p=>
                        <List productName={p._id} key={p._id} Productscount={p.Basket} ProductsOfOrder={p.Mail?p.Mail:"-"} StausOfOrder={p.Name}/>
                    )
                }
            </div>
        </div>
    </div>)
};
export default Users;