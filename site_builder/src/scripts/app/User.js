export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getUser() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
//export default User;
