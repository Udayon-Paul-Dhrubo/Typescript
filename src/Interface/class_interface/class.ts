import { IPlayer } from "./IPlayer.js";
import { Player } from "./Player.js";

const masrafi = new Player("Masrafi", 36, "Bangladesh");

let sakib : IPlayer;
sakib = new Player("Sakib", 34, "Bangladesh");

const players : IPlayer[] = [];
players.push(masrafi);
players.push(sakib);