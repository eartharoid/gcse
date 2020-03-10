/**
 * @name earth_CS-CW-Task-2
 * @description Year 11 Computer Science coursework / programming project
 * @author eartharoid
 * @license MIT
 * 
 * https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)
 */
const log = require("leekslazylogger"); // my own logger module (better logging to console)
const random = require("random"); // for dice roll
const read = require("readline-sync"); // for inputs / menus
const utils = require("../modules/utils.js"); // global functions
const mainMenu = require("../modules/menu.js"); // main menu
const fs = require("fs"); // to interact with the filesystem (to update player data file)
const players = require("../players.json"); // perm storage for player details and all scores


const rollFrames = (p) => {
	const frames = ['Rolling', 'Rolling.', 'Rolling..', 'Rolling...', '\n'];
	for (let i = 0; i < frames.length; i++) {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(utils.colour(p, frames[i]));
		utils.sleep(500);
	};
};

const roll = async (player) => { // roll the dice
	let one = random.int(1, 6);
	let two = random.int(1, 6);
	let t = one + two;

	console.log(utils.colour(player, `\n\n> Player ${player}: ${global.currentPlayers["p" + player].name}`));
	utils.sleep(1000);
	rollFrames(player);

	if (utils.isEven(t)) {
		t = t + 10;
		// console.log(log.colour.yellowBright(`${one} + ${two} = ${one + two} (even), +10 = ${t}`));
		// console.log(utils.colour(player, `You scored `)  + t);
	} else {
		if (global.currentPlayers["p" + player].score - 5 < 0) {
			t = 0;
		} else {
			t = t - 5;
		}
	};

	console.log(utils.colour(player, `${global.currentPlayers["p" + player].name} rolled ${log.colour.white(one)} ${utils.colour(player, "and")} ${log.colour.white(two)}${utils.colour(player, `, scoring`)} ${t}`));
	global.currentPlayers["p" + player].score += t;

	if (one === two) {
		let three = random.int(1, 6);
		global.currentPlayers["p" + player].score += three;
		console.log(utils.colour(player, `You rolled a double; you get another roll`));
		rollFrames(player);
		console.log(utils.colour(player, `${global.currentPlayers["p" + player].name} rolled ${log.colour.white(one)}`));
	};


};

module.exports = async () => {
	for (let round = 1; round <= 5; round++) {
		console.log(log.colour.bgCyanBright(log.colour.black(`\n\n---><---ROUND ${round}---><---\n`)));
		utils.sleep(1000);
		await roll("1");
		console.log(utils.colour("1", `${global.currentPlayers.p1.name}'s total score: `) + global.currentPlayers.p1.score);
		utils.sleep(2500);
		await roll("2");
		console.log(utils.colour("2", `${global.currentPlayers.p2.name}'s total score: `) + global.currentPlayers.p2.score);
		utils.sleep(1000);


		if (round === 5) {
			while (global.currentPlayers.p1.score === global.currentPlayers.p2.score) {
				console.clear()
				console.log(`Both players scored ${global.currentPlayers.p1.score}; each player gets another roll!`);
				console.log(log.colour.bgCyanBright(log.colour.black(`\n\n---><---BONUS ROUND---><---\n`)));
				await roll("1");
				console.log(utils.colour("1", `${global.currentPlayers.p1.name}'s total score: `) + global.currentPlayers.p1.score);
				utils.sleep(2500);
				await roll("2");
				console.log(utils.colour("2", `${global.currentPlayers.p2.name}'s total score: `) + global.currentPlayers.p2.score);
				utils.sleep(2000);
			};

			let winner;
			global.currentPlayers.p1.score > global.currentPlayers.p2.score ? winner = "1" : winner = "2"; // who won?
			players[global.currentPlayers["p" + winner].username].wins++; // add 1 to player's wins
			console.clear()
			console.log(utils.colour("1", `${global.currentPlayers.p1.name}'s final score: `) + global.currentPlayers.p1.score);
			console.log(utils.colour("2", `${global.currentPlayers.p2.name}'s final score: `) + global.currentPlayers.p2.score);

			players[global.currentPlayers.p1.username].scores.push(global.currentPlayers.p1.score);
			players[global.currentPlayers.p2.username].scores.push(global.currentPlayers.p2.score);
			fs.writeFileSync("./players.json", JSON.stringify(players), (err) => console.error);
			console.log(utils.colour(winner, `\n${global.currentPlayers["p" + winner].name} won the game with `) + `${global.currentPlayers["p" + winner].score} ${utils.colour(winner, `points, and now has `)}` + `${utils.players()[global.currentPlayers["p" + winner].username].wins} ${utils.colour(winner, `${utils.plural("win", utils.players()[global.currentPlayers["p" + winner].username].wins)}.`)}`);
			console.log("\n\nUpdating leaderboard...")
			

		} else {
			read.question(`\n\nPress the enter key to continue to round ${round + 1}...`, { hideEchoBack: true, mask: '' });
			console.clear()
		};

	};

	// console.log(`p1: ${utils.players()[global.currentPlayers.p1.username].wins} / ${utils.players()[global.currentPlayers.p1.username].scores}, p2: ${utils.players()[global.currentPlayers.p1.username].wins} / ${utils.players()[global.currentPlayers.p1.username].scores}`)

	read.question('\n\nPress the enter key to return to main menu...', { hideEchoBack: true, mask: '' });
	mainMenu(true);
};