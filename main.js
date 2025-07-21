"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

//ใช้ class เป็น template เพื่อสร้าง object ต่างๆในเกมแบบซ้ำๆ//
class Field {
	constructor(field = [[]]) {
		this.field = field;
		// Set the start position at (0, 0)
		this.posX = 0;
		this.posY = 0;
		this.field[this.posX][this.posY] = pathCharacter;
	}

	// Print field //
	print() {
		clear();

		// Replace with your own code //
		console.log(this.field); // Please REMOVE this line before you start your code!
	}

	// Your Code //
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
