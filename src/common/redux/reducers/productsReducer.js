import {productsAPI} from '@apicomponents';

const GET_PRODUCTS = 'admin/products/GET_PRODUCTS';
const GET_PRODUCT = 'admin/products/GET_PRODUCT';
const SET_PRODUCT = 'admin/products/SET_PRODUCT';
const UNMOUNT_PRODUCT = 'admin/products/UNMOUNT_PRODUCT';
const DELETE_PRODUCT = 'admin/products/DELETE_PRODUCT';
const ADD_PRODUCT = 'admin/products/ADD_PRODUCT';
const SET_COUNT = 'admin/products/SET_COUNT';
const SET_CURRENT_PAGE = 'admin/products/SET_CURRENT_PAGE';

const initialState = {
    products: [],
    productsCount: 0,
    currentPage: 1,
    pageSize: 12,
    name: null,
    description: null,
    price: null,
    color: null,
    wireless: null,
    backlight: null,
    producer: null,
    category: null,
    id: null,
    photos: [],
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
                ...action.product
            };
        case SET_PRODUCT:
            return {
                ...state,
                ...action.product
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
                photos: null

            };
        case DELETE_PRODUCT:
            const newProducts = state.products.map(p => {
                if (p._id !== action.id)
                    return newProducts.push(p)
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
export const deleteProduct = (product) => ({type: DELETE_PRODUCT, product});
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