/* class Player {
    //! by default all properties are public
    _name : string;
    _age : number;
    _country : string;

    constructor( name : string, age : number, country : string ) {
        this._name = name;
        this._age = age;
        this._country = country;
    }

    play(){
        console.log(`${this._name} from ${this._country} is playing`);
    }
}


const masrafi =  new Player('Masrafi', 36, 'Bangladesh');
masrafi.play();

const sakib = new Player('Sakib', 34, 'Bangladesh');
sakib.play();

console.log(masrafi._name);

const players : Player[] = [];
players.push(masrafi, sakib);

console.log(players);

 */