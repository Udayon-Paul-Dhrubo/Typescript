import { IPlayer } from "./IPlayer.js";

export class Player implements IPlayer {
    
    //private _name : string; >> error. Because by interface _name field is public
                                        // but interface can't declare private 
    public _name: string;
    public _age: number;
    readonly _country: string;

    constructor( name : string, age : number, country : string ){
        this._name      = name;
        this._age       = age;
        this._country   = country;
    }
    play(): void {
        throw new Error("Method not implemented.");
    }
    
    //this is for Private_Player class to support private field
    getAge(){
        return 0;
    }
}