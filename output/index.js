import { Player } from './classes/Player.js'; //! here .js extension is required
const mashrafi = new Player('Mashrafi', 36, 'Bangladesh');
const shakib = new Player('Shakib', 33, 'Bangladesh');
mashrafi.play();
shakib.play();
const players = [];
players.push(mashrafi);
players.push(shakib);
