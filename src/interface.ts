interface IPerson {
    sayHello(): void;
}

class Person implements IPerson {
    constructor(
        readonly name: string,
        private  age: number
    ){}
    
    sayHello(): void {
        console.log(`Hello, I am ${this.name}`);
    }    
}


const customer : IPerson = {
    sayHello: () => console.log('Hello, I am customer')
}

let person3 = <IPerson>{}; // another way to declare an object
person3.sayHello = () => console.log('Hello, I am person3');


const person1 : IPerson = new Person('Masrafi', 36);
let person2 : IPerson = new Person('Sakib', 34);


//person1 = person2; // >> errr because person1 is const
person2 = person1; // >> no error




