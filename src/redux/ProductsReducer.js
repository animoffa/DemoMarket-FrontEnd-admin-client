import {productsAPI} from "@apicomponents";

const GET_PRODUCTS = 'admin/Products/GET_PRODUCTS';
const GET_PRODUCT = 'admin/Products/GET_PRODUCT';
const SET_PRODUCT = 'admin/Products/SET_PRODUCT';
const UNMOUNT_PRODUCT = 'admin/Products/UNMOUNT_PRODUCT';
const DELETE_PRODUCT = 'admin/Products/DELETE_PRODUCT';
const ADD_PRODUCT = 'admin/Products/ADD_PRODUCT';
const SET_COUNT = 'admin/Products/SET_COUNT';
const SET_CURRENT_PAGE = 'admin/Products/SET_CURRENT_PAGE';

let initialState = {
    products: [],
    productsCount: 0,
    currentPage: 1,
    pageSize: 10,
    name: null,
    description: null,
    price: null,
    color: null,
    wireless: null,
    backlight: null,
    producer: null,
    category: null,
    id: null,
};

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case GET_PRODUCT:
            return {
                ...state,
                id: action.product._id,
                name: action.product.name,
                description: action.product.description,
                price: action.product.price,
                color: action.product.color,
                wireless: action.product.wireless,
                backlight: action.product.backlight,
                producer: action.product.producer,
                category: action.product.category
            };
        case SET_PRODUCT:
            return {
                ...state,
                id: action.id._id,
                name: action.id.name,
                description: action.id.description,
                price: action.id.price,
                color: action.id.color,
                wireless: action.id.wireless,
                backlight: action.id.backlight,
                producer: action.id.producer,
                category: action.id.category

            };
        case UNMOUNT_PRODUCT:
            return {
                ...state,
                name: null,
                description: null,
                price: null,
                color: null,
                wireless: null,
                backlight: null,
                producer: null,
                category: null,
                id: null,

            };
        case DELETE_PRODUCT:
            let newProducts = [];
            state.products.map(p => {
                if (p._id === action.id) {
                } else {
                    newProducts.push(p);
                }
            });
            return {
                ...state,
                products: newProducts
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.newProduct, ...state.products]
            };
        case SET_COUNT:
            return {
                ...state,
                productsCount: action.count
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        default:
            return state;
    }
};
export const setProduct = (id, name, description, price, color, wireless, backlight, producer, category) => ({
    type: SET_PRODUCT,
    id, name, description, price, color, wireless, backlight, producer, category
});
export const getProducts = (products) => ({type: GET_PRODUCTS, products});
export const getProductByID = (product) => ({type: GET_PRODUCT, product});
export const unmountProduct = () => ({type: UNMOUNT_PRODUCT});
export const deleteProduct = (id) => ({type: DELETE_PRODUCT, id});
export const addProduct = (newProduct) => ({type: ADD_PRODUCT, newProduct});
export const setCount = (products) => ({type: SET_COUNT, count: products});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const getProductsAPI = (currentPage, pageSize) => async (dispatch) => {
    let response = await productsAPI.getProducts(currentPage, pageSize);
    dispatch(getProducts(response.data.products));
    dispatch(setCurrentPage(response.data.currentPage));
    dispatch(setCount(response.data.totalCount));
};
export const getProductByIDAPI = (id) => async (dispatch) => {
    let response = await productsAPI.getProductById(id);
    dispatch(getProductByID(response.data));
};
export const UpdateProductAPI = (id, name, description, products, price, color, wireless, backlight, producer, category) => async (dispatch) => {
    let response = await productsAPI.updateProductById(id, name, description, products, price, color, wireless, backlight, producer, category);
    dispatch(setProduct(response.data));
};
export const deleteProductAPI = (id) => async (dispatch) => {
    await productsAPI.deleteProduct(id);
    dispatch(deleteProduct(id));
};
export const addProductAPI = () => async (dispatch) => {
    let response = await productsAPI.addProduct();
    dispatch(addProduct(response.data));
};

export default ProductsReducer;