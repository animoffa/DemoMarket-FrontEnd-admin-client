import React from 'react';
import defaultPhoto from "../../../images/DefaultUser.png"
import css from './Basket.module.css'
import Product from "@ccomponents/Products/Product/Product";
import List from "../../../common/components/list/List";

const Basket = (props) => {
    let a=[];
    let arrBasket=()=>{
        a = props.products.filter(function(obj) { return props.basket.indexOf(obj._id) >= 0; });
    };
    let b=[];
    let arrOrders=()=>{
        b=props.orders.filter(function(obj) { return (props.id===obj.userID)? obj:null; });
    };
    arrOrders();
    arrBasket();
    return <div className={css.Main}>
        <div className={css.UserInfo}>
            <div><img src={props.photo ? props.photo : defaultPhoto} alt="User`s photo" width="180"/></div>
            <div className={css.Info}>
                <div className={css.Name}>{props.name}</div>
                <div>{props.mail}</div>
            </div>
        </div>
        <div className={css.Line}/>
        <div className={css.Basket}>
            <div>Корзина</div>
            <div className={css.Products}>
            {
                a.map(p=> <Product productName={p.name} key={p._id} price={p.price ? p.price : "-"} id={p._id}
                                           delete={() => props.delete(p._id)} photos={p.photos}/> )
            }
            </div>
            <div className={css.Line}/>
        </div>
        <div className={css.Orders}>
            <div>Заказы</div>
            <div className={css.list}>
            <List categoryName={"ID Заказа"} Productscount={"Дата заказа"} ProductsOfOrder={"Кол-во продуктов"}
                  StausOfOrder={"Статус"}/>
           {
                b.map(p=> <List productName={p._id.slice(0,-8)} key={p._id} Productscount={p.date.toString().slice(0,-14)} ProductsOfOrder={p.productsID.length}
                                      StausOfOrder={p.status}/>)
            }
            </div>
        </div>
    </div>
};
export default Basket;