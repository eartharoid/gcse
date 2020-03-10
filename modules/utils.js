/**
 * @name earth_CS-CW-Task-2
 * @description Year 11 Computer Science coursework / programming project
 * @author eartharoid
 * @license MIT
 * 
 * https://www.ocr.org.uk/Images/503195-programming-project-tasks-june-2019-and-june-2020.pdf (task 2)
 */
const log = require("leekslazylogger");
const fs = require("fs");

module.exports.colour = (x, t) => {
	if (x == "1") {
		return log.colour.blueBright(t);
	} else {
		return log.colour.greenBright(t);
	}
};

module.exports.isEven = (n) => {
	return n % 2 == 0; // Steve Mayne on StackOverflow
};

module.exports.sleep = (milliseconds) => { // https://www.sitepoint.com/delay-sleep-pause-wait/
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
};

module.exports.players = () => {
    return JSON.parse(fs.readFileSync("./players.json"))
};

module.exports.uPlayers = (json) => {
    fs.writeFileSync("./players.json", JSON.stringify(json), (err) => console.error);
}

module.exports.plural = (string, number) => {
	return number == 1 ? string : `${string}s`; 
};
