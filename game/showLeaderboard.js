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
const utils = require("../modules/utils.js"); // global functions
const mainMenu = require("../modules/menu.js") // main menu
const fs = require("fs"); // to interact with the filesystem (to update player data file)
const players = utils.players(); // perm storage for player details and all scores

module.exports = () => {
	console.log(log.colour.magentaBright("\n\n|----- Leaderboard -----|\n"));

	let allScores = [];
	let wins = {};

	for (x in players) {
		// console.log(players[x].name + "			" + players[x].scores)
		for(let i = 0; i < players[x].scores.length; i++) {
			allScores.push({name: players[x].name, score: players[x].scores[i]}); // compile an array of objects (name with score)
		};
	};

	allScores.sort((a, b) => (a.score > b.score) ? -1 : 1); // order from highest to lowest using this cool arrow function within the sort function


	console.log(log.colour.bgCyanBright(log.colour.black(`\n\n|- HIGHEST SCORES -|\n`)));

	for(let i = 0; i < 5; i++) {
		console.log(`${i+1}: ${allScores[i].name} - ${allScores[i].score}`); // output the leaderboard
	};
	

	/*console.log(log.colour.bgCyanBright(log.colour.black(`\n\n|- MOST WINS -|\n`)));

	for(let i = 0; i < 5; i++) {
		console.log(`${i+1}: Name - x wins (of x games)`)
		// console.log(`${i+1}: ${orderedWins[i].name} - ${orderedWins[i].wins} ${utils.plural("win", orderedWins[i].wins)} (out of ${"x"} games)`); // output the leaderboard
	};*/



	read.question('\n\nPress the enter key to return to main menu...', { hideEchoBack: true, mask: '' });
	mainMenu(true);
};