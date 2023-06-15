"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Private_Player = void 0;
class Private_Player {
    constructor(name, age, country) {
        this._name = name;
        this._age = age;
        this._country = country;
    }
    getAge() {
        return this._age;
    }
    play() {
        throw new Error("Method not implemented.");
    }
}
exports.Private_Player = Private_Player;
