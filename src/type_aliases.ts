//! Here we see that writing same type of type is redundant
/* const userDetails = (
    id : string | number,
    user : {
        name : string,
        age : number
    }
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (
    user : {
        name : string, 
        age : number
    }
) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
} */

//! So writing common type of type is done by type alias

//? creating custom type aka type alias
type stringOrNum = string | number;
type userType = { name : string, age : number };

const userDetails = (
    id : stringOrNum,
    user : userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (
    user : userType
) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
}