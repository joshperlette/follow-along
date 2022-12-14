
let a = 5;
let b = 6;

let myFunction = (a,b) => a + b;

myFunction(a, b);
console.log(myFunction); 
            
 
let listThree = document.querySelector("#list-three");
let listFive = document.querySelector("#list-five");
let unordered = listThree.parentElement;
let body = listThree.closest('body');
let skipList = [listThree, listFive];

let changeColor = (element) => element.style.backgroundColor = "#999";


skipList.forEach(changeColor);




















// ls
// pwd
// cd 
// cd ..
// clear
// cd / **—> root director**
// cd ~
// cd <folder/folder/folder> ** <> means to add your own folder names that exist on your computer.
// mkdir <folder>
// open <folder> **for windows use: start <folder>
// touch index.html  **for windows use: echo "" > index.html
// open index.html **for windows use: start index.html
// open -a “Sublime Text”  **for windows see the note about this at the bottom of this lecture!!
// open . **for windows use: start .
// mv index.html about.html
// *Try using the Up and Down arrow.

// rm <file>
// rm -r <folder>
// say hello **(only on Mac)**


// WHAT IS THE TERMINALLLL?????

/* historically the only way we USED to communicate with computers and tell 
them what to do. NOW we have a Graphical User Interface (GUI). But terminals are 
still often faster for quick access on a regular basis.

// -----------KEEP THE CODE BELOW FOR ADVANCED OBJECTS REFERENCE

// reference type


// // context vs scope
// // scope is created with curly brackets (functions, objects, etc.)
// // context is referring to which object you are within
// const object4 = {
// 	a: function() {
// 		console.log(this);
// 	}
// }

// // insantiation: creating multiple copies of an object
// class Player {
// 	// every time you make a copy of the class, the following function runs
// 	constructor(name, type, power) {
// 		console.log("player", this);
// 		this.name = name;
// 		this.type = type;
// 		this.power = power;
// 	}
// 	introduce() {
// 		console.log(`Hi I am ${this.name}, I'm a ${this.type}. 
// 			I have ${this.power} XP`);
// 	}
// }

// // I want "Wizard" to add onto whatever "Player" is
// class Wizard extends Player {
// 	constructor(name, type, power) {
		
// 		// "super" literally references the parent class of this class
// 		// this is technically a subclass of "player"
// 			super(name, type, power);
// 			console.log("wizard", this); 
// 	}
// 	play() {
// 		console.log(`WEEEEEE I'm a ${this.type}. 
// 			I have an XP level of ${this.power}`);
// 	}
// }

// class Rogue extends Player {
// 	constructor(name, type, power) {
// 		super(name, type, power);
// 	}
// 	play() {
// 		console.log(`Argh. I'm  a ${this.type}. 
// 			Not that it matters, but my XP is ${this.power}`);
// 	}
// }

// class Magician extends Wizard {
// 	constructor(name, type, power) {
// 		super(name, type, power);
// 	}
// 	play() {
// 		console.log(`woooweeeee I'm a ${this.type}
// 			I am the most powerfullest in land with ${this.power} XP`);
// 	}
// }
// // creating a new "character", they each have two properties
// const wizard1 = new Wizard("shelly", "healer", "7");
// const rogue1 = new Rogue("shawn", "bludgeoner", "8");
// const magician1 = new Magician("peter", "cards", "4");
// const defaultPlayer1 = new Player("player", "random", "NA");




*/
