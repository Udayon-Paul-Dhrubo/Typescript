export class Player {
    constructor(name, age, country) {
        this._name = name;
        this._age = age;
        this._country = country;
    }
    play() {
        console.log(`${this._name} from ${this._country} is playing`);
    }
}
