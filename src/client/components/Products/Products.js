import React from 'react';
import Paginator from "../../../common/components/Pagination/Paginator";
import categoriesCss from "./Products.module.css";
import Product from "./Product/Product";

let Products = (props) => {
    const {CategoriesMain, title, Categories} = categoriesCss;
    return (<div className={CategoriesMain}>
        <div className={title}>
            <h1 className={title}>Продукты</h1>
        </div>
        <div>
            <div className={Categories}>
                {
                    props.products.map(p => props.categoryId ?
                        (props.categoryId === p.category) &&
                        <Product productName={p.name} key={p._id} price={p.price ? p.price : "-"} id={p._id}
                                 delete={() => props.delete(p._id)} photos={p.photos}/> :
                        <Product productName={p.name} key={p._id} price={p.price ? p.price : "-"} id={p._id}
                                 delete={() => props.delete(p._id)} photos={p.photos}/>
                    )
                }

            </div>
        </div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   productsCount={props.productsCount} pageSize={props.pageSize}/>
    </div>)
};
export default Products;