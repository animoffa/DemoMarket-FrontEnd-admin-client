import React from 'react';
import defaultPhoto from "../../../images/DefaultUser.png"
import css from './Basket.module.css'
import Product from "@ccomponents/Products/Product/Product";

const Basket = (props) => {
    let a=[];
    let arrBasket=()=>{
        a = props.products.filter(function(obj) { return props.basket.indexOf(obj._id) >= 0; });
    };
    arrBasket();
    console.log(a);
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
            <div>
            {
                a.map(p=> <Product productName={p.name} key={p._id} price={p.price ? p.price : "-"} id={p._id}
                                           delete={() => props.delete(p._id)} photos={p.photos}/> )
            }
            </div>
        </div>
        <div className={css.Orders}>

        </div>
    </div>
};
export default Basket;