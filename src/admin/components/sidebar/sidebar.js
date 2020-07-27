import React from "react";
import sidebarIcon from "../../../images/icons8-меню-50.png";
import SidebarItem from "./sidebarItem/sidebarItems"
import sidebarCss from "./sidebar.module.css";

let Sidebar = () => {
    return (
        <div className={sidebarCss.sidebarMain}>
            <div className={sidebarCss.sidebarHead}>
                <img className={sidebarCss.sidebarIcon} src={sidebarIcon} alt={"MENU"}/>
            </div>
            <nav className={sidebarCss.sidebarBody}>
                <SidebarItem text="Категории" route="/categories"/>
                <SidebarItem text="Продукты" route="/products"/>
                <SidebarItem text="Пользователи" route="/users"/>
                <SidebarItem text="Заказы" route="/orders"/>
            </nav>

        </div>
    )
};
export default Sidebar;