import React from 'react';
import phoneIcon from "../../../images/icons8-телефон-24.png"
import UserIcon from "../../../images/icons8-пользователь-без-половых-признаков-64.png"
import basketIcon from "../../../images/icons8-корзина-48.png"
import headerCss from "./header.module.css"

let Header = () => {
    return (
        <div className={headerCss.Header}>
            <div className={headerCss.HeaderLeftSide}>
                <div className={headerCss.HeaderphoneNumber}>
                    <img src={phoneIcon} alt={"CALL"}/>
                    <span className={headerCss.phoneNumberALL}>+7<span
                        className={headerCss.phoneNumberPinkColor}>(000)</span>00-00-00</span>
                </div>
                <nav className={headerCss.HeaderNavigation}>
                    <div className={headerCss.HeaderLi}>Главная</div>
                    <div className={headerCss.HeaderLi}>О компании</div>
                    <div className={headerCss.HeaderLi}>Контакты</div>
                </nav>
            </div>
            <div className={headerCss.HeaderRightSide}>
                <div className={headerCss.HeaderPersonalArea}>
                    <img src={UserIcon} width={"37px"} alt={""}/>
                </div>
                <div>
                    <img src={basketIcon} width={"30px"} alt={"Корзина"}/>
                </div>
            </div>
        </div>
    )
};
export default Header;