import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux'
import {addUser, getUsers} from "./actions/userActions";

class App extends Component {

    constructor(props) {
        super(props);
        this.newUser = this.newUser.bind(this);
    }

    componentDidMount() {
        this.props.onGetUsers()
    }

    newUser() {
        const user_obj = {user_id: 10, username: 'ozanteoman'};
        this.props.onAddUser(user_obj)
    }

    userList() {
        return this.props.users.user_list.map((user, key) => {
            return (<div key={key}><h3>{user.username}</h3></div>)
        })
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h3> Eleman Sayısı {this.props.newCount}</h3>
                </div>
                <div>
                    {this.userList()}
                </div>
                <div>
                    <button onClick={this.newUser}>Add a new user</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.user,
        newCount: props.count + 2
    }
};

const mapDispatchToProps = {
    onAddUser: addUser,
    onGetUsers: getUsers
};

const mergeProps = (propsFromState, propsFromDispatch, propsFromOwn) => {
    return {
        ...propsFromState,
        ...propsFromDispatch,
        ...propsFromOwn,
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
