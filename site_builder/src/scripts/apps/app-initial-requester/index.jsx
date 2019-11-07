import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import store from '../store';
import App from './App';

const init = (sel, props) => {
    ReactDOM.render((
        <Provider store={store}>
            <App/>
        </Provider>
    ), document.getElementById('initial-requester'));
};
export default init;
