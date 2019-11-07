import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/actions';

class App extends Component {

    state = {

    };

    render() {
        let usersPage = null;
        let userTotal = null;
        if (this.props.users) {
            usersPage = this.props.users.page;
            userTotal = this.props.users.total;
        }
        return (
            <div className="App">
                <h1>Page: {usersPage}</h1>
                <h1>Total: {userTotal}</h1>
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
