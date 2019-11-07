import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../components/Auxiliary/Auxiliary';
import * as actions from "../store/actions";

class App extends Component {

    componentDidMount() {
        this.props.onGetUsers();
    }

    render() {
        return <Aux> </Aux>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUsers: () => dispatch(actions.getUsers())
    }
};

export default connect(null, mapDispatchToProps)(App);
