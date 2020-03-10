/**
 * @name earth_CS-CW-Task-2
 * @description Year 11 Computer Science coursework / programming project
 * @author eartharoid
 * @license MIT
 *
 * https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)
 */
const log = require("leekslazylogger"); // better logging to console, (npmjs.com/leekslazylogger, made by me, uses leeks.js (npmjs.com/leeks.js) by David Ralph for colours)
const read = require("readline-sync"); // for inputs / menus (npmjs.com/readline-sync)
const utils = require("../modules/utils.js"); // global functions 
const mainMenu = require("../modules/menu.js") // main menu, must be passed with a bool as a param

module.exports = () => {
	console.log(log.colour.magentaBright("\n\n|----- Credits -----|"));
	console.log("\nMy Year 11 / GCSE Computer Science coursework / programming project");
	console.log(log.colour.yellowBright("\nCopyright (C) 2020 Isaac Saunders (eartharoid)"));
	console.log(log.colour.cyanBright("\nLicense: ") + "MIT");
	console.log(log.colour.cyanBright("GitHub: ") + "github.com/eartharoid/gcse");
	console.log(log.colour.cyanBright("My website: ") + "eartharoid.me");
	console.log(log.colour.cyanBright("\nTask: ") + "https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)");


	read.question('\n\nPress the enter key to return to main menu...', {hideEchoBack: true, mask: ''});
	mainMenu(true);
};