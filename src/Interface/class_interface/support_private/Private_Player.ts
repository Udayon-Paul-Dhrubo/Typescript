import { IPrivate_Player } from "./IPrivate_Player.js";

export class Private_Player implements IPrivate_Player {
    
    //private _name : string; >> error. Because by interface _name field is public
                                        // but interface can't declare private 
    public _name: string;
    private _age: number;
    readonly _country: string;

    constructor( name : string, age : number, country : string ){
        this._name      = name;
        this._age       = age;
        this._country   = country;
    }

    getAge(){
        return this._age;
    }

    play(): void {
        console.log(`${this._name} is playeing`);
    }
    
}