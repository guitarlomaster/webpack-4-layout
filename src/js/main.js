var obj = {
    name: 'Max',
    age: 25
};

var copyObj = (object) => {
    return {...object}
};

var copiedObj = copyObj(obj);

console.log(copiedObj);
