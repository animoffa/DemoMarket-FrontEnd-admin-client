import {categoriesAPI} from "@apicomponents";

const GET_CATEGORIES = 'admin/Categories/GET_CATEGORIES';
const GET_CATEGORY = "admin/Categories/GET_CATEGORY";
const SET_CATEGORY = "admin/Categories/SET_CATEGORY";
const DELETE_CATEGORY = 'admin/Categories/DELETE_CATEGORY';
const ADD_CATEGORY = 'admin/Categories/ADD_CATEGORY';

let initialState = {
    categories: [],
    category: null,
    name: null,
    description: null,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        case GET_CATEGORY:
            return {...state, category: action.category};
        case SET_CATEGORY:
            return {...state, name: action.name, description: action.description};
        case DELETE_CATEGORY:
            let newCategories = [];
            state.categories.map(category => {
                if (category._id === action.id) {
                } else {
                    newCategories.push(category);
                }
            });
            return {
                ...state,
                categories: newCategories
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [action.newCategory, ...state.categories]
            };
        default:
            return state;
    }
};
export const getCategories = (categories) => ({type: GET_CATEGORIES, categories});
export const getCategoryByID = (category) => ({type: GET_CATEGORY, category});
export const setCategory = (Name, Description, Products) => ({type: SET_CATEGORY, Name, Description, Products})
export const deleteCategory = (id) => ({type: DELETE_CATEGORY, id});
export const addCategory = (newCategory) => ({type: ADD_CATEGORY, newCategory});

export const getCategoriesAPI = () => async (dispatch) => {
    let response = await categoriesAPI.getCategories();
    dispatch(getCategories(response.data));
};
export const getCategoriesByIDAPI = (id) => async (dispatch) => {
    let response = await categoriesAPI.getCategoryById(id);
    dispatch(getCategoryByID(response.data));
};
export const updateCategoryById = (Name, id, Description, Products) => async (dispatch) => {
    await categoriesAPI.updateCategoryById(Name, id, Description, Products);
    dispatch(setCategory(Name, Description, Products))
};
export const deleteCategoryAPI = (id) => async (dispatch) => {
    await categoriesAPI.deleteCategory(id);
    dispatch(deleteCategory(id));
};
export const addCategoryAPI = () => async (dispatch) => {
    let response = await categoriesAPI.addCategory();
    dispatch(addCategory(response.data));
};
export default AppReducer;