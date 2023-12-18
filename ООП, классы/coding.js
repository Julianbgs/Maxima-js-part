class User {
    _name = 'John';
    _age = 13;

    constructor(name, age) {
        if(name)
            this._name = name;
        if (age)
            this._age = age;
    }

    get userName() {
        return  this._name
    }

    get userAge() {
        return  this._age
    }
}

const peter = new User('Tew', 51 );
console.log(peter.userName);
console.log(peter.userAge)