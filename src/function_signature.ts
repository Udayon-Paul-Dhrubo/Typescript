


// if we dont want to define function now, 
// we can specify the //! function signature !// 
//so that while defining function we must follow the signature


let emni_func : () => void; // this function must return void 
                            //& no parameter is allowed

let add : (a : number, b : number) => number;   // this function must return number 
                                                //& 2 parameter is allowed of number type
                                                //following name is not necessary
add = ( a : number, b : number ) => {
    return a + b;
}