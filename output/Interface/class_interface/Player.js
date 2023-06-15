"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, age, country) {
        this._name = name;
        this._age = age;
        this._country = country;
    }
    play() {
        throw new Error("Method not implemented.");
    }
    //this is for Private_Player class to support private field
    getAge() {
        return 0;
    }
}
exports.Player = Player;
