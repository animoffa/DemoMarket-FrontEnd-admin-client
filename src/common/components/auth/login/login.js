import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../utilities/formControls/formControls";
import {Validator} from "../../../utilities/validators";
import {connect} from "react-redux";
import {login} from "@astore/authReducer";
import {NavLink, Redirect} from "react-router-dom";
import s from "./login.module.css"
import Preloader from "../../preloader/preloader";
//TODO: сдедать посередине + рамка
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.mail, formData.password);
    };

    if (props.isAuth) {
        if (props.isAdmin === undefined) {
            return <Preloader/>
        }
        if (props.isAdmin === true) {
            return <Redirect to="/admin/categories"/>
        } else {
            return <Redirect to="/products"/>
        }
    }
    return <div className={s.loginForm}>
        <h1 style={{color: "white"}}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        <NavLink to="/registration">Еще не зарегестрированы?</NavLink>
    </div>
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <span>Login</span>
                <Field placeholder="mail" name="mail" component={Input} validate={Validator.required}/>
            </div>
            <div>
                <span>Password</span>
                <Field type="password" name="password" placeholder="password" validate={Validator.required}
                       component={Input}/>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error} </div>}
            <div className={s.remember}>
                <Field type="checkbox" name="rememberMe" component="input"/> Remember me
            </div>
            <button className={s.loginButton}>LogIn</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isAdmin: state.auth.user.isAdmin
})
export default connect(mapStateToProps, {login})(Login);