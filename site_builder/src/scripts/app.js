import '../style/app.scss'

import {User} from './app/User';

var obj = {
    name: 'Max',
    age: 25
};

var copyObj = (object) => {
    return {...object}
};

var copiedObj = copyObj(obj);

console.log(copiedObj);
console.log(213);
console.log(1111);

const user = new User('Max', 25);
console.log(user.getUser());
