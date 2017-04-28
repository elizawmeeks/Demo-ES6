console.log("hihi");

	// Let is only defined in the code block (just the if loop), where as var is defined in the entire function. So func2(); runs, but func1(); returns that tmp is undefined.
function func1(){
	if (true){
		let tmp = 123;
	}
	console.log("func1 tmp", tmp);
}

// func1();

function func2(){
	if (true){
		var tmp = 345;
	}
	console.log("func2 tmp", tmp);
}

func2();

function func3(){
	var foo = 5;
	if (true){
		var foo = 10;
	}
	console.log("func3 with var", foo);
}

func3();

function func4(){
	let foo = 5;
	if (true){
		let foo = 10;
		console.log("foo inside", foo);
	}
	console.log("foo outside", foo);
}

func4();

// Be careful when expecting a value outside of code block. Use var if you want to do something with i outside of the for loop. Using let would return an undefined error.
function func5(){
	for (var i=0; i < 10; i++){
		// do some stuff
	}
	// want to do something based on i
	console.log("the total number of products", i);
}

func5();

// Block-scoped and cannot change/reassigned
const MY_FAVORITE_NUMBER = 3;
// MY_FAVORITE_NUMBER = 12; //Returns a syntax error

// ES 6 Arrow functions. The following two code blocks are exactly the same with different syntax.

// var reflect = function(value) {
// 	return value;
// }

let reflect = (value) => value + 1;

let sum = (num1, num2) => num1 + num2;

var equals = sum(3, 4);
console.log(equals);

let mywords = reflect("this is a beautiful day");

console.log("mywords", mywords);