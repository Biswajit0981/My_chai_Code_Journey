 class MyClass {
    constructor(name,  age) {
        this.name = name;
        this.age = age;
        this.getUser = function () {
            console.log(`Hello ${this.name}! Your age is ${this.age}`);
        }
    }
 }

 const myClass = new MyClass("Roni", 12);
myClass.getUser();