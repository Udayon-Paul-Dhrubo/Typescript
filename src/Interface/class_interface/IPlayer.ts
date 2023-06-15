// interface can define Public(by default) and Readonly fields
// not private

export interface IPlayer {
    _name    : string;
    _age     : number;
    readonly _country : string;

    play()  : void;
    getAge() : number;
}