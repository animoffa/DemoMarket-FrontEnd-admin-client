import React from 'react';
import {NavLink} from "react-router-dom";
import img from "../../../../images/images.png"
import css from './Product.module.css';

let Product = (props) => {
    return (
        <NavLink to={`/product/${props.id}`} className={css.Main}>
            <img src={props.photos?props.photos[0]:img} alt="фото клавиатуры" className={css.photo}/>
            <div className={css.name}>
                { props.productName}
            </div>
            <div className={css.Price}>
              Цена: {props.price}
            </div>
        </NavLink>
    )
};
export default Product;