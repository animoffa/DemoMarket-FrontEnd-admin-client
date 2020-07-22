import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import CategoriesReducer from "./CategoriesReducer";
import ProductsReducer from "./ProductsReducer";
import UsersReducer from "./UsersReducer";
import OrdersReducer from "./OrdersReducer";
import {reducer as formReducer} from "redux-form";
import AuthReducer from "@astore/AuthReducer";

// TODO: TODO: TODO: TODO: TODOOOOOOOOOOOOOOOOOOOOOOOOOOO: SUKA NAZVANIA KLU4eI S MALENKOI BUKVI NAHUIIIIIIII

let reducers = combineReducers({
    categories:CategoriesReducer,
    Products:ProductsReducer,
    Users:UsersReducer,
    Orders:OrdersReducer,
    Auth:AuthReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;