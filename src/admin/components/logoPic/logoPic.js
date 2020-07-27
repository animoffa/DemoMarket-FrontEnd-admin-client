import React from "react";
import logo from "../../../images/icons8-клавиатура-64.png"
import picCss from "./logoPic.module.css";

let logoPic = () => {
    return (
        <div className={picCss.main}>
            <img src={logo} alt=""/>
            <div className={picCss.stripedText}>Demo market</div>
        </div>
    )
};
export default logoPic;