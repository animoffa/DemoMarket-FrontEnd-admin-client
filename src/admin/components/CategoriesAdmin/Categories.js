import React from 'react';
import List from "../../../common/components/list/List";
import add from "../../../images/icons8-добавить-64.png"
import categoriesCss from "./Categories.module.css";

let Categories = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <div className={categoriesCss.title}>
            <h1 className={categoriesCss.title}>Категории</h1>
            <img src={add} alt="Добавить" onClick={() => {
                props.add()
            }} style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
        </div>
        <div>
            <div className={categoriesCss.Categories}>
                <List categoryName={"Название категории"}/>
                {
                    props.categories.map(c =>
                        <List key={c._id} categoryName={c.name ? c.name :"-"} id={c._id}
                              delete={() => props.delete(c._id)}/>
                    )
                }
            </div>
        </div>
    </div>)
};
export default Categories;