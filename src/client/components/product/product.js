import React from "react";
import img from "../../../images/images.png";
import css from "./product.module.css"

let Product = (props) => {
    const a = [{
        color: props.color
    }, {
        wireless: props.wireless.toString()
    }, {
        backlight: props.backlight.toString()
    }, {
        producer: props.producer
    }];
    return <div className={css.productMain}>
        <div className={css.MainPart}>
            <div>
                <img src={props.photos ? props.photos[0] : img} alt="photos not found" className={css.Img}/>
            </div>
            <div className={css.MainText}>
                <div>
                    {props.name}
                </div>
                <div>
                    Цена: {props.price}
                </div>
                <div className={css.Param}>
                    {props.description}
                </div>
            </div>
        </div>
        <div className={css.line}/>
        <div>Прочие характеристики</div>
        <div className={css.Values}>
            {a.map(p => <Params k={Object.keys(p)} v={Object.values(p)}/>)}
        </div>
    </div>
};

let Params = (props) => {
    return <div>
        {props.k} . . . . . . . <span className={css.BigWidth}>. . . . . . . . . . . . . . . .</span> {props.v}
    </div>
};
export default Product;