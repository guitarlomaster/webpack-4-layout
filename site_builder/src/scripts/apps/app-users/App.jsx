import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/actions';
import User from './components/User/User';

class App extends Component {

    state = {

    };

    render() {
        let users = <p>There is no users</p>;
        if (this.props.users && this.props.users.data.length) {
            users = this.props.users.data.map(user => {
                return (
                    <User
                        key={user.id}
                        firstName={user.first_name}
                        lastName={user.last_name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                )
            });
        }
        return (
            <div className="users">
                {users}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
};

export default connect(mapStateToProps)(App);
