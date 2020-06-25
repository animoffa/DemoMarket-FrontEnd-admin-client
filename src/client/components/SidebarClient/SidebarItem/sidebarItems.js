import React from 'react';
import {NavLink} from "react-router-dom";
import sidebarCss from "./sidebarItem.module.css";

let SidebarItem=(props)=>{
    return (
            <NavLink to={props.route} className={sidebarCss.sidebarNav}>
                {props.text}
            </NavLink>
    )
};
export default SidebarItem;