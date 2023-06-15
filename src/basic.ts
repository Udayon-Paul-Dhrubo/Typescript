const addID = ( obj : object) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
}

let user = addID({
    name: "Masrafi",
    age: 35
});

//user.name >> error
            // because addID j object ta destructure korche seta niye idea nai
            // cause compile howar age code read krche

// ------------------------- Use of Generic ----------------------------- //

// so we have to define the type of the object => Generic
const addID_generic = <T>( obj : T ) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}; 
}

let user_generic = addID_generic({
    name: "Masrafi",
    age: 35
});

console.log(user_generic.name); // no error
                                // now addID_generic function ta j object ta destructure korche seta niye idea ache
                                // cause ekhn object er type ta k generic way te receive krche

let user_generic2 = addID_generic('Masrafi'); // no error
                                            // cause just T thakle sobkichui capture korte parbe.


// To prevent this
const addID_generic2 = <T extends object> (obj : T) =>{
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
}

//let user_generic3 = addID('string'); // error => Object chara kichui pathano jabe na



/// ---------------------------------------- if we want to define custom object generic ------------------------//
// minimum defined field gulo thaka lagbe extra thakle problem nai
const addID_generic3 = < T extends {    
        name : string,
        age  : number
    } > (obj : T) =>{

        let id = Math.floor(Math.random() * 100);
        return {...obj, id};
    }

let user_generic3 = addID_generic3({
    name    : "Mashragi",
    age     : 35,
    country : 'Bangladesh'
}); // no error. Because minimum requirement fillup koreche

console.log(user_generic3.country); //no error
        
