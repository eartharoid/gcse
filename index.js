/**
 * @name earth_CS-CW-Task-2
 * @description Year 11 Computer Science coursework / programming project
 * @author eartharoid
 * @license MIT
 * 
 * https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)
 */

const log = require("leekslazylogger"); // better logging to console, (npmjs.com/leekslazylogger, made by me, uses leeks.js (npmjs.com/leeks.js) by David Ralph/ohlookitsderpy for colours)
const read = require("readline-sync"); // for inputs / menus (npmjs.com/readline-sync)
const utils = require("./modules/utils.js"); // global functions 
const game = require("./modules/game.js"); // each section is split into its own file
const mainMenu = require("./modules/menu.js"); // main menu
const players = require("./players.json"); // perm storage for player details and all scores

global.currentPlayers = { p1: { name: undefined, username: undefined, score: 0, incorrectLoginAttempts: 0 }, p2: { name: undefined, username: undefined, score: 0, incorrectLoginAttempts: 0 } }; // temp storage for the current players of the ongoing game 

console.log(log.colour.bgBlackBright(log.colour.black("Computer Science Coursework | Programming Project : Task 2 / Dice Game")));



var logins = { p1: { username: "", password: "" }, p2: { username: "", password: "" } }; // temp storage for usernames and password that have been entered


const reqLogin = (x) => {
	if (global.currentPlayers["p" + x].incorrectLoginAttempts === 3) {
		console.log(log.colour.redBright("You have had 3 unsuccessful login attempts. Login is temporarily blocked; try again later."));
		process.exit(); // exit if 1 player enters incorrect details 3 times
	}

	logins["p" + x].username = read.question(utils.colour(x, `Player ${x}'s username: `)); // ask for creds
	logins["p" + x].password = read.question(utils.colour(x, `Player ${x}'s password: `), { hideEchoBack: true });

	if (auth(x) === true) {
		global.currentPlayers["p" + x].username = logins["p" + x].username;
		global.currentPlayers["p" + x].name = players[global.currentPlayers["p" + x].username].name;
		console.log(utils.colour(x, `\nPlayer ${x} successfully authenticated. Hello, ${global.currentPlayers["p" + x].name}\n`));
		if (x == "1") {
			reqLogin("2") // player 1 has logged in, now for player 2
		} else {
			setTimeout(function() {
				mainMenu(true); // both players are logged in, start the game after a second
			}, 1000)

			return true;
		}
	} else {
		console.log(log.colour.redBright("Incorrect login details; try again."));
		global.currentPlayers["p" + x].incorrectLoginAttempts++;
		reqLogin(x);
	}

};

const auth = (x) => {
	if (logins["p" + x].username in players && players[logins["p" + x].username].password === logins["p" + x].password) {
		if (x === "2" && logins.p1.username === logins.p2.username) {
			console.log(log.colour.redBright("2 different accounts must be used."));
			return false;
		}
		return true;
	} else {
		return false;
	};
};

console.log(log.colour.magentaBright("\n|--------------- Dice Game ---------------|"));
console.log(log.colour.magentaBright(`: Player 1 will be displayed in ${log.colour.blueBright("blue")}\n`));
console.log(log.colour.magentaBright(`: Player 2 will be displayed in ${log.colour.greenBright("green")}`));
console.log(log.colour.magentaBright("|-----------------------------------------|\n"));

reqLogin("1"); // ! UNCOMMENT TO RE-ENABLE AUTHENTICATION
// mainMenu(false); // must be commented when Authentication is enabled
