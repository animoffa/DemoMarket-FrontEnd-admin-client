import React from 'react';
import phoneIcon from "../../images/icons8-телефон-24.png"
import UserIcon from "../../images/icons8-пользователь-без-половых-признаков-64.png"
import exitIcon from "../../images/icons8-выход-50.png"
import headerCss from "./header.module.css"
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <div className={headerCss.Header}>
            <div>
                <div className={headerCss.HeaderphoneNumber}>
                    <img src={phoneIcon} alt={"CALL"}/>
                    <span>+7<span
                        className={headerCss.phoneNumberPinkColor}>(000)</span>00-00-00</span>
                </div>
                <nav className={headerCss.HeaderNavigation}>
                    <NavLink to='/products'>Главная</NavLink>
                    <NavLink to='/about'>О компании</NavLink>
                    <div>Контакты</div>
                </nav>
            </div>
            <div className={headerCss.HeaderRightSide}>
                <div className={headerCss.HeaderPersonalArea}>
                    <NavLink to="/basket"><img src={UserIcon} width={"37px"} alt={""}/></NavLink>
                </div>
                <div>
                    <NavLink to="/login"><img src={exitIcon} width={"30px"} alt={"Корзина"}
                                              onClick={props.logout}/></NavLink>
                </div>
            </div>
        </div>
    )
};
export default Header;