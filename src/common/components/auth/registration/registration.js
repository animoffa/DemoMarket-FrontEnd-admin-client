import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../utilities/formControls/formControls";
import {Validator} from "../../../utilities/validators";
import {connect} from "react-redux";
import {register,login} from "@astore/authReducer";
import {Redirect} from "react-router-dom";
import s from "../login/login.module.css"

const Registration = (props) => {
    const onSubmit = (formData) => {
       let {name,mail,password,passwordRepeated}=formData
        if (passwordRepeated===password){

        let User={
            name:name,
            mail:mail,
            password:password
        }
        props.register(User);
        props.login(mail,password);
    }else{
        alert("Пароль повторен неверно")
    }};
    if (props.isAuth) {
        return <Redirect to="/products"/>
    }
    return <div className={s.loginForm}>
        <h1 style={{color:"white"}}>Registration</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const RegForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <span>Name</span>
                <Field placeholder="name" name="name" component={Input} validate={Validator.required}/>
            </div>
            <div>
                <span>Login</span>
                <Field placeholder="mail" name="mail" component={Input} validate={Validator.required}/>
            </div>
            <div>
                <span>Password</span>
                <Field type="password" name="password" placeholder="password" validate={Validator.required} component={Input}/>
            </div>
            <div>
                <span>repeat password</span>
                <Field type="password" name="passwordRepeated" placeholder="passwordRepeated" validate={Validator.required} component={Input}/>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error} </div>}
            <button className={s.loginButton}>SignUp</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "reg"
})(RegForm);

export default connect(state=>({isAuth: state.auth.isAuth}), {register,login})(Registration);