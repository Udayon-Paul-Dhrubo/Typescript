// to support private prop in interface we can use this way
// simply just don't write it
// but mention a method to get That private prop

export interface IPrivate_Player {
    _name    : string;
    readonly _country : string;

    play()  : void;
    getAge() : number;
}