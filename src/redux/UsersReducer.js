import {usersAPI} from "@apicomponents";

const GET_USERS = 'admin/users/GET_USERS';
const GET_USER='admin/users/GET_USER';

let initialState = {
    users: [],
    mail:null,
    name:null,
    basket:[],
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users
            };
        case GET_USER:
            return {
                ...state,
               mail: action.user.mail,
                name:action.user.name,
                basket: action.user.basket

            };
        default:
            return state;
    }
};

export const getUsers = (users) => ({type: GET_USERS, users});
export const getUser=(user)=>({type: GET_USER,user});

export const getUsersAPI = () => async(dispatch) => {
   let response = await usersAPI.getUsers();
        dispatch(getUsers(response.data));
};
export const getUserByID = (id) => async(dispatch) => {
  let response = await usersAPI.getUserById(id);
  dispatch(getUser(response.data));
};

export default UsersReducer;