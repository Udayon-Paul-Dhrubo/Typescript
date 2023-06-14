"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}
const customer = {
    sayHello: () => console.log('Hello, I am customer')
};
let person3 = {}; // another way to declare an object
person3.sayHello = () => console.log('Hello, I am person3');
const person1 = new Person('Masrafi', 36);
let person2 = new Person('Sakib', 34);
//person1 = person2; // >> errr because person1 is const
person2 = person1; // >> no error
