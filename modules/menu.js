/**
 * @name earth_CS-CW-Task-2
 * @description Year 11 Computer Science coursework / programming project
 * @author eartharoid
 * @license MIT
 * 
 * https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)
 */

const log = require("leekslazylogger"); // my own logger module (better logging to console)
const read = require("readline-sync"); // for inputs / menus
const utils = require("./utils.js"); // global functions
const game = require("./game.js"); // each section is split into its own file
const players = require("../players.json"); // perm storage for player details and all scores

/**
 * @description display the main menu and clear the screen
 * @param {boolean} auth - must be true to show the players are authenticated. will exit if not true.
 */
module.exports = (auth) => {
	console.clear(); // remove previous text from console (looks cleaner)

	if(!auth) {
		// console.log(log.colour.redBright("Authentication error; proccess exiting."));
		// return process.exit();
		console.log(log.color.yellow("! AUTHENTICATION SKIPPED FOR DEVELOPMENT PURPOSES"));
	};
	
	console.log(log.colour.magentaBright("\n\n|----- Main Menu -----|"));
	selection = read.keyInSelect(['Play', 'Show leaderboard', 'Instructions', 'Credits', 'Exit'], 'Select: ', {guide: false, cancel: false}); // ask for input
	console.log("\n\n");

	switch(selection + 1){
		case 1:
			console.clear();
			game.startGame(); // pass control to the game handler
			break;
		case 2:
			console.clear();
			game.showLeaderboard(); // pass control to the leaderboard handler
			break;
		case 3:
			console.clear();
			game.showInstructions(); // not required
			break;
		case 4:
			console.clear();
			game.showCredits(); // not required
			break;
		case 5:
			console.clear();
			console.log(`Thank you for playing, ${utils.colour("1", global.currentPlayers.p1.name)} and ${utils.colour("2", global.currentPlayers.p2.name)}.`);
			process.exit()
			break;
	}
};