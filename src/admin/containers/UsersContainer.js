import React from 'react';
import {connect} from "react-redux";
import {getUsers, getUsersAPI} from "@astore/UsersReducer";
import Users from "@acomponents/Users/Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersAPI();
    }

    render() {
        return <Users users={this.props.users}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.Users.users
    }
};
export default connect(mapStateToProps, {getUsersAPI, getUsers})(UsersContainer);