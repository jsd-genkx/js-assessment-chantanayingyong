# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process

1. เริ่มจากการวิเคราะห์ก่อนว่าตัวเกมนี้ ต้องมี function อะไรบ้าง ต้องมี ตัวแปรหรือ function อะไรบ้าง
2. เนื่องจากเกมนี้สร้างเพื่อให้เล่นได้หลายครั้ง จึงควรเริ่มจากสร้างเป็น class ขึ้นมาเพื่อใช้เป็น template ในการสร้าง object ในครั้งต่อๆไปได้ง่ายขึ้น
2.1 เนื่องจากต้นฉบับมี การสร้าง class มาให้บางส่วนแล้ว ก็มากำหนดจุด start เพิ่ม โดยให้เริ่มจากจุด (0,0)
3. สร้าง method askDirection เพื่อให้ผู้เล่นเลือกทิศทางที่ต้องการเดิน เห็นว่าการใช้ switch case น่าจะตอบโจทก์ และทำง่ายสุดเลยเริ่มจากส่วนนี้ก่อน โดยระบุว่าตัว PathCharacter จะเคลื่อนที่ไปตาม แกน x,y ผ่านคำสั่งที่กรอกเข้ามาทาง prompt.lowercase เพื่อให่ทุก input พิมใหญ่หรือเล็กก็ได้ผลลัพธ์แบบเดียวกัน โดยเลือกใช้ WASD แทนทิศทางต่างๆ นอกจากนี้มีการใส่ default แจ้งเตือนผู้เล่นกรณี input คำสั่ง/ข้อความอื่นเข้ามา
4.สร้าง Method startGame มาแจ้งผู้เล่นว่าเดินเจออุปสรรคอะไรหรือไม่ หรือเจอหมวกแล้ว โดยการใช้ while loop 
5.สร้าง method อื่นๆ ที่เกี่ยวข้องเช่น เช็คว่าเดินตกหลุมไหม เจอหมวกรึเปล่า ออกนอกแมพไหม รวมถึง print แมพออกมาว่าเดินไปทางไหน

ุ6.สร้าง static มา generateField โดยการใช้ math.random มาสร้าง array ใหม่เพื่อกำหนด sizing map และตั้งให้ generate map ใหม่ ถ้าเกิดสุ่มไปเกิดที่จุก start (0,0)

 *ส่วน static เสิร์ชจาก internet และ GPT ว่าทำยังไง และปรับตัวแปรต่างๆเองภายหลังครับ

Note to Instructor
เนื่องจากเขียน code ไปด้วย เขียน comment ไปพร้อมๆกัน ถ้าอ่าน Thinking Process และ main.js ไปด้วยกัน น่าจะเห็นภาพที่ผมอธิบายชัดเจนขึ้นครับ

ฺีBug
1. กด W ขึ้นบนออกแมพแล้ว error
- Status: Fixed ต้องใช้ while loop ควรใช้ if ว่าเช็คอยู่ในแมพก่อน แล้วค่อย else if เงื่อนไขอื่น

_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
