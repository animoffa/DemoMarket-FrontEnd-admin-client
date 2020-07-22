import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControls/FormControls";
import {required} from "../../utilities/Validators";
import {connect} from "react-redux";
import {login} from "@astore/AuthReducer";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.mail, formData.password);
    };
    console.log(props.isAuth)
    if (props.isAuth) {
        return <Redirect to={"/products"}/>
    }
    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>Login</span>
                <Field placeholder="mail" name={"mail"} component={Input} validate={required}/>
            </div>
            <div>
                <span>Password</span>
                <Field type="password" name={"password"} placeholder="password" validate={required} component={Input}/>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error} </div>}
            <div className={s.remember}>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> Remember me
            </div>
            <button className={s.loginButton}>Log-in</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
});
export default connect(mapStateToProps, {login})(Login);