"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

// #ประกาศตัวแปรสิ่งที่สำคัญๆในเกมโดยใช้ const เพราะไม่ต้องการให้ค่ามีการเปลี่ยนแปลง target=hat, hole=trap, fc=walkable path, pc=MC position
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

//ใช้ class เป็น template เพื่อสร้าง object ต่างๆในเกมแบบซ้ำๆ//
class Field {
	constructor(field = [[]]) {
		this.field = field;
		// Set the start position at (0, 0)
		this.posX = 0; //แกนนอน <- ->
		this.posY = 0; //แกนตั้ง != แกนนอน 
		// ตั้งค่าจุด start ของเกม โดยให้เริ่มที่ x = 0, y= 0 เพราะเป็นจุดเริ่มต้นที่มีแน่ๆในแมพ
		this.field[this.posX][this.posY] = pathCharacter;
	}

	// สร้าง method เพื่อถามผู้เล่นว่าต้องการเดินไปทางไหน
	askDirection() {
		const direction = prompt("choose your way bro!").toLowerCase(); //ต้องใส่ method .lowercase ด้วย เพราะผู้เล่นอาจใช้พิมเล็กหรือพิมใหญ่
		//เลือกใช้ wasd ง่ายดี เหมือนเล่นเกม
		switch (direction) {
			case "w":
				this.posY -= 1; //เดินขึ้น
				break; //ถ้าเงื่อนไขตรงก็หยุดที่ case นั้นๆ
			case "a":
				this.posX -= 1; //เดินซ้าย
				break;
			case "s":
				this.posY += 1; //เดินลง
				break;
			case "d":
				this.posX += 1; //เดินขวา
				break;
			default: //ใช้ในกรณีที่ไม่มีอันไหนเป็นไปตาม switch case ด้านบนเบย
				console.log("กรุณาเลือกทิศทางที่ต้องการไป ขึ้นบน(w), ไปซ้าย(a), ลงล่าง(s), ไปขวา(d) "); //log บอกผู้เล่นว่ากดผิดใช้ได้แค่ wasd
				this.askDirection(); //แล้วก็ให้ผู้เล่นเลือกใหม่โดยเรียก method นี้ซ้ำ
				break;
		}
	}

	//สร้าง method มาตรวจว่าผู้เล่นเดินไปไหน ตกหลุมตกขอบไหม หรือเดินเจอหมวกรึเปล่า
	
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field();
newGame.print();
