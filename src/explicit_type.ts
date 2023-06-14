
// ----------------------------------- Variable Declaration ----------------------------------- //

let a : string; // type must be in small letter

let b : number;

a = "Hello";
// a = 10; >> error


// ----------------------------------- Array Declaration ----------------------------------- //

let str_arr : string[] = []; // like new Array<string>();

str_arr.push("Hello");
//str_arr.push(1); >>> error

// ------------------------------ Object -----------------------

let unspecified_obj : object; // unspecified object

unspecified_obj = [ 1,2,3];
unspecified_obj = { name : "Hello", age : 10, adult : false};

 

let specified_obj : { // specified object
    name : string,
    age : number,
    adult : boolean
}