import {authAPI} from '@apicomponents';

const REGISTER_REQUEST_PENDING = 'REGISTER_REQUEST_PENDING'
const REGISTER_REQUEST_FINISH = 'REGISTER_REQUEST_FINISH'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'

const initialState = {
    inProgress: false,
    isAuth: !!localStorage.getItem('token'),
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                inProgress: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                inProgress: false,
                isAuth: true,
                user: action.user
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                inProgress: false
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        case REGISTER_REQUEST_PENDING:
            return {inProgress: true}

        case REGISTER_REQUEST_FINISH:
            return {inProgress: false}

        default:
            return state
    }
};
const login_request = () => ({type: LOGIN_REQUEST})
const login_success = user => ({type: LOGIN_SUCCESS, user})
const login_failure = () => ({type: LOGIN_FAILURE})
const register_request_pending = () => ({type: REGISTER_REQUEST_PENDING})
const register_request_finish = () => ({type: REGISTER_REQUEST_FINISH})
const logout_success = () => ({type: LOGOUT})


export const login = (email, password) => async dispatch => {
    dispatch(login_request());
    try {
        const {name, mail, basket,id, success,isAdmin} = await authAPI.login(email, password)
        let user = {
            name, basket, mail,id,isAdmin
        }
        if (!success) {
            dispatch(login_failure())
            alert('Что-то пошло не так');
        } else {
            dispatch(login_success(user))
        }
    } catch (err) {
        dispatch(login_failure())
        alert(err.toString());
    }
}

export const logout = () => dispatch => {
    authAPI.logout()
    dispatch(logout_success());
};

export const register = user => async dispatch => {
    dispatch(register_request_pending())
    try {
        const {success, msg} = await authAPI.register(user)
        dispatch(register_request_finish())
        if (success) {
            history.push('/login')
            alert("success");
        } else
            alert(msg + "dvdfvdvfdv");
    } catch (err) {
        dispatch(register_request_finish())
        alert(err);
    }
}