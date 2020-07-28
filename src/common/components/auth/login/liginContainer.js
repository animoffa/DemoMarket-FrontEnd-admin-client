import React from "react";
import {connect} from "react-redux";
import {login} from "@astore/authReducer";
import Login from "./login";
import Preloader from "../../preloader/preloader";

class LoginContainer extends React.Component {

    render() {
        if(!this.props.isAdmin){
            return <Preloader isAdmin={this.props.isAdmin} isAuth={this.props.isAuth}/>
        }
        return <Login />
    }
}

let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    isAdmin:state.auth.isAdmin
})
export default connect(mapStateToProps, {login})(LoginContainer);