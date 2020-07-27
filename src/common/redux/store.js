import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

import CategoriesReducer from "./reducers/categoriesReducer";
import ProductsReducer from "./reducers/productsReducer";
import UsersReducer from "./reducers/usersReducer";
import OrdersReducer from "./reducers/ordersReducer";
import AuthReducer from "./reducers/authReducer";

let reducers = combineReducers({
    categories:CategoriesReducer,
    products:ProductsReducer,
    users:UsersReducer,
    orders:OrdersReducer,
    auth:AuthReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;