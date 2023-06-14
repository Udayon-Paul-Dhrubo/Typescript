/* 
const myFunc = () => {
    console.log('Hello World!');
} 
*/

/* 
let myFunc : Function;
//myFunc = 5; >> Error
myFunc = () => {
    console.log('Hello World!');
}
*/


//! ------------------------- Optional Parameter ------------------------- //
/* 
const myFunc = ( a : string, b : string, age?: number ) => { // age is now optional parameter for => ? 
    console.log(age); //! undefined
    console.log(`Hello ${a} ${b}!`);
}

const myFunc2 = ( a : string, b : string, age : number = 0 ) => {   // set default value for age
                                                                    // so no need to set optional parameter
                                                                    // na dile default value ta nibe

    console.log(age); // not undefined
    console.log(`Hello ${a} ${b}!`);
}
myFunc2('John', 'Doe') 
*/



//! ------------------------- Return Type ------------------------- //
// by default return type is void

// void == kono kichu nai    //undefined == kono kichu ase but value set kora hoy nai  

// void != undefined


// return type by inference
const myFunc = ( a : string , b : string ) => {
    return a + b; // return type is string by inference
}


// explicit return type
const myFunc2 = ( a : string, b : string) : string => { 
    return a + b;
}


