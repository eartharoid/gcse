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

module.exports = () => {
	console.log(log.colour.magentaBright("\n\n|----- Instructions & Rules -----|\n"));
	console.log("- Each player rolls the dice twice per turn/round");
	console.log("- The 2 numbers are added together and added to their score");
	console.log("- If the total is even, 10 more points are added. If odd, 5 points are subtracted. If die 1 and die 2 roll the same, the player is given a third roll, with the extra points added to their score")
	console.log("- Both players roll the dice twice for each of the 5 rounds");
	console.log("- If both players have the same score at the end, they each roll 1 die until one players rolls higher than the other. The highest score wins");
	read.question('\n\nPress the enter key to return to main menu...', {hideEchoBack: true, mask: ''});
	mainMenu(true);
};