/**
 * @name earth_CS-CW-Task-2
 * @description Year 11 Computer Science coursework / programming project
 * @author eartharoid
 * @license MIT
 * 
 * https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)
 */

module.exports.startGame = () => {
	require("../game/startGame.js")();
};

module.exports.showLeaderboard = () => {
	require("../game/showLeaderboard.js")();
};

module.exports.showInstructions = () => {
	require("../game/showInstructions.js")();
};

module.exports.showCredits = () => {
	require("../game/showCredits.js")();
};