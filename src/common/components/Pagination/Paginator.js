import React from "react";
import cn from "classnames";
import Preloader from "../Preloader/Preloader";
import css from "./Paginator.module.css";

let Paginator = (props) => {
    if (!props.productsCount) {
        return <Preloader/>
    }
    let pagesCount = Math.ceil(props.productsCount / props.pageSize);

    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i);
    }

    let portionNumber = 1;
    let leftPortionPageNumber = (portionNumber - 1) * (10 + 1);
    let rightPortionPageNumber = (portionNumber) * 10;
    return <div className={css.paginator}>
        {
            page.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({[css.selectedNum]: props.currentPage === p}, css.num)}
                                 key={p}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
        }
    </div>

};
export default Paginator;