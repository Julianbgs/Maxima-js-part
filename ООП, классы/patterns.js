//Фабрика

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ProductFactory {
    createProduct(name, price) {
        return new Product(name, price);
    }
}

const factory = new ProductFactory();
const product1 = factory.createProduct("Laptop", 1000);
const product2 = factory.createProduct("Phone", 500);
// console.log(product1.name);
// console.log(product2.name);

//Observer - Наблюдатель
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");
const observer4 = new Observer("Observer 4");

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.addObserver(observer4);

subject.notify("Hello, observers!");

