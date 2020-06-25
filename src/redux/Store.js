import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import CategoriesReducer from "./CategoriesReducer";
import ProductsReducer from "./ProductsReducer";
import UsersReducer from "./UsersReducer";
import OrdersReducer from "./OrdersReducer";


let reducers = combineReducers({
    Categories:CategoriesReducer,
    Products:ProductsReducer,
    Users:UsersReducer,
    Orders:OrdersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;