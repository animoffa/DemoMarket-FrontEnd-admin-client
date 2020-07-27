import React from "react";
import {connect} from "react-redux";
import {getUsers, getUsersAPI} from "@astore/usersReducer";
import Users from "@acomponents/users/users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersAPI();
    }

    render() {
        return <Users users={this.props.users}/>
    }
}

export default connect(state=>({users:state.users.users}), {getUsersAPI, getUsers})(UsersContainer);