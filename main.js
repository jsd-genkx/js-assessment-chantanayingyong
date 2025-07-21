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

	//สร้าง method มาแจ้งว่าผู้เล่นตกหลุมตกขอบไหม หรือเดินเจอหมวกรึเปล่า
	//เลือกใช้ while loop เพราะไม่รู้จำนวนที่แน่นอนในการเลือกเดินของผู้เล่น
	startGame(){
		let stayAlive = true; //ตั้งค่าตัวแปรให้เกมยังสามารถเล่น(ลูป)ได้อยู่ ตราบใดที่ผู้เล่นไม่เอาตัวละคร(pathCharacter) ไปตาย
		while (stayAlive) {
			this.print(); //ใช้ method print ว่าตัวละครเดินอยู่ตรงไหนแล้ว
			this.askDirection(); //ใช้ method askDirection เพื่อถามผู้เล่นว่าจะไปไส
			if (!this.insideMap()) {
				console.log("You're dead because going off the map."); //เดินออกแมพ ทำแบบกดเดินออกแล้วตายไว้ก่อน
				stayAlive= false; //ถ้าทันเดี๋ยวกลับมาทำต่อว่าให้เตือนหลายครั้งก่อนตาย "You're going off the map. This is the first time, don't do the second time."
				break;
			} else if (this.inHole()) {
				console.log("REST IN PEACE"); //ตกหลุมตาย
				stayAlive = false;
				break;
			} else if (this.foundHat()) {
				console.log("GG WELL PLAYED"); //จบเกม เจอหมวก
				stayAlive=false; //ตั้งชื่อไม่เหมาะเท่าไหร่ชนะได้หมวก แต่ stayAlive = false ถ้าทันจะมาเปลี่ยน
				break;
			}
			this.field[this.posY][this.posX] = pathCharacter; //ไม่เข้าเงื่อนไข while loop ก็เดินต่อ
		}
	}

	// Note! method เหมือน functionc แต่ไม่มีอิสระเท่า เน้นทำงานภายใน class
	// สร้าง method เพื่อถามผู้เล่นว่าต้องการเดินไปทางไหน
	askDirection() {
		const direction = prompt("choose your way bro!").toLowerCase(); //ต้องใส่ method .lowercase ด้วย เพราะผู้เล่นอาจใช้พิมเล็กหรือพิมใหญ่
		//เลือกใช้ wasd ง่ายดี เหมือนเล่นเกม
		switch (direction) {
			case "w":
				this.posY -= 1; //เดินขึ้น โดยกำหนดให้เดินทีละ 1 ตำแหน่งต่อครั้งเท่านั้น
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

	//สร้าง methodError สำหรับเช็คว่าตัวละครอยู่ที่ไหนในแมพ
	inHole() {
		return this.field[this.posY][this.posX] === hole; //เช็คจุดเดินปัจจุบันว่าตกหลุมไหม (true/false) ถ้า true > stay alive = false
	}

	insideMap() {
		return (
			this.posY >=0 && this.posY < this.field.length &&
			this.posX >=0 && this.posX < this.field[0].length //ต้องใส่ 0
		);
	}

	foundHat() {
		return this.field[this.posY][this.posX] === hat; //เช็คจุดเดินปัจจุบันว่าเจอหมวกไหม
	}
	print() {
    const displayString = this.field.map(row => {
        return row.join('');
      }).join('\n');
    console.log(displayString);
  }

  static generateField(height, width, percentage = 0.1) {
    const field = new Array(height).fill(0).map(el => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter : hole;
      }
    }
    const hatSpot = { //สุ่มจุดเกิดหมวก ใช้ math.random
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    while (hatSpot.x === 0 && hatSpot.y === 0) { //เช็คให้หมวกไม่เกิดจุดเดียวกับจุด start (0,0) โดยให้สุ่มเกิดใหม่
      hatSpot.x = Math.floor(Math.random() * width);
      hatSpot.y = Math.floor(Math.random() * height);
    }
    field[hatSpot.y][hatSpot.x] = hat;
    return field;
  }
}

const playGame = new Field(Field.generateField(5, 7, 0.1)); //กำหนดจำนวน row, column และอัตราสุ่มหลุม
playGame.startGame();
