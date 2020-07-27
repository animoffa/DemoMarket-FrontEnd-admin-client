import React from "react";
import picCss from "./logoPic.module.css";
import logo from "../../../images/icons8-клавиатура-64.png"
import SearchIcon from "../../../images/icons8-поиск-50.png"

let logoPicClient = () => {
    return <div className={picCss.main}>
        <img src={logo} alt=""/>
        <div className={picCss.stripedText}>Demo market</div>
        <div>
                <Search/>
        </div>
    </div>
};
const Search = () => {
    return (
        <form className={picCss.search}>
            <input type="search" className={picCss.InputSearch} placeholder={"Search..."}
                   name="search"/>
            <button className={picCss.ButtonSearch}><img src={SearchIcon} width="20px" className={picCss.img}
                                                         alt="Найти"/></button>
        </form>
    )
};

export default logoPicClient;