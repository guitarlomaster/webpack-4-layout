import '../style/app.scss';

window.$ = window.jQuery = require('jquery');

import requesterInit from './apps/app-initial-requester';
import headerInit from './apps/app-pages';
import usersInit from './apps/app-users';

$(document).ready(() => {

    requesterInit();
    headerInit();
    usersInit();

});

