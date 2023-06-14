"use strict";
class Player {
    // by default all properties are public
    // so if we want to make a property private we have to use private keyword
    /* private _name : string;
    private _age : number;
    readonly _country : string; // readonly property can be accessed but can't be changed

    constructor( name : string, age : number, country : string ) {
        this._name = name;
        this._age = age;
        this._country = country;
    } */
    //! another way to declare properties shortcut
    constructor(_name, _age, // public keyword is mandatory here
    _country) {
        this._name = _name;
        this._age = _age;
        this._country = _country;
    }
    play() {
        console.log(`${this._name} from ${this._country} is playing }`);
    }
}
const masrafi = new Player('Masrafi', 36, 'Bangladesh');
//console.log(masrafi._name); >> error
console.log(masrafi._country); // >> no error
//masrafi._country = 'India'; >> error for readonly property
