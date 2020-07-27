import React from "react";
import sidebarIcon from "../../../images/icons8-меню-50.png";
import SidebarItem from "./sidebarItem/sidebarItems"
import sidebarCss from './sidebar.module.css';

let SidebarClient = (props) => {
    return (
        <div className={sidebarCss.sidebarMain}>
            <div className={sidebarCss.sidebarHead}>
                <img className={sidebarCss.sidebarIcon} src={sidebarIcon} alt={"MENU"}/>
            </div>
            <nav className={sidebarCss.sidebarBody}>
                {
                    props.categories.map(category =><SidebarItem text={category.name} route={`/products/${category._id}`}/>)
                }
            </nav>

        </div>
    )
};
export default SidebarClient;