//tic tac toe javacript
//function that takes into account whose turn it is and changes
//the square accordingly



var turn = 0;

var box1 = "undefined";
var box2 = "undefined";
var box3 = "undefined";
var box4 = "undefined";
var box5 = "undefined";
var box6 = "undefined";
var box7 = "undefined";
var box8 = "undefined";
var box9 = "undefined";
var player1 = document.getElementById('player1').value;

//fuck arrays they don't work

function tictactoe(){}



tictactoe.prototype.clickBox1 = function(){
		if(turn == 0){
			document.getElementById('x1').style.display = "block";
			turn++;
			box1 = "x";
		}else if(turn == 1){
			document.getElementById('o1').style.display = "block";
			turn--;
			box1 = "o";
		}
}

tictactoe.prototype.clickBox2 = function(){
		if(turn == 0){
			document.getElementById('x2').style.display = "block";
			turn++;
			box2 = "x";
		}else if(turn == 1){
			document.getElementById('o2').style.display = "block";
			turn--;
			box2 = "o";
		}
}

tictactoe.prototype.clickBox3 = function(){
		if(turn == 0){
			document.getElementById('x3').style.display = "block";
			turn++;
			box3 = "x";
		}else if(turn == 1){
			document.getElementById('o3').style.display = "block";
			turn--;
			box3 = "o";
		}
}

tictactoe.prototype.clickBox4 = function(){
		if(turn == 0){
			document.getElementById('x4').style.display = "block";
			turn++;
			box4 = "x";
		}else if(turn == 1){
			document.getElementById('o4').style.display = "block";
			turn--;
			box4 = "o";
		}
}

tictactoe.prototype.clickBox5 = function(){
		if(turn == 0){
			document.getElementById('x5').style.display = "block";
			turn++;
			box5 = "x";
		}else if(turn == 1){
			document.getElementById('o5').style.display = "block";
			turn--;
			box5 = "o";
		}
}

tictactoe.prototype.clickBox6 = function(){
		if(turn == 0){
			document.getElementById('x6').style.display = "block";
			turn++;
			box6 = "x";
		}else if(turn == 1){
			document.getElementById('o6').style.display = "block";
			turn--;
			box6 = "o";
		}
}

tictactoe.prototype.clickBox7 = function(){
		if(turn == 0){
			document.getElementById('x7').style.display = "block";
			turn++;
			box7 = "x";
		}else if(turn == 1){
			document.getElementById('o7').style.display = "block";
			turn--;
			box7 = "o";
		}
}

tictactoe.prototype.clickBox8 = function(){
		if(turn == 0){
			document.getElementById('x8').style.display = "block";
			turn++;
			box8 = "x";
		}else if(turn == 1){
			document.getElementById('o8').style.display = "block";
			turn--;
			box8 = "o";
		}
}

tictactoe.prototype.clickBox9 = function(){
		if(turn == 0){
			document.getElementById('x9').style.display = "block";
			turn++;
			box9 = "x";
		}else if(turn == 1){
			document.getElementById('o9').style.display = "block";
			turn--;
			box9 = "o";
		}
}
//functions that check every box depending on whose turn it is an fills it with an
//X or O accordingly



tictactoe.prototype.checkWinner = function(){
	if(box1 == "x" && box2 == "x" && box3 == "x"){
		alert(player1 + " is the winner!")
		window.location.reload();
	}else if(box4 == "x" && box5 == "x" && box6 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}else if(box7 == "x" && box8 == "x" && box9 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}else if(box1 == "x" && box4 == "x" && box7 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}else if(box2 == "x" && box5 == "x" && box8 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}else if(box3 == "x" && box6 == "x" && box9 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}else if(box1 == "x" && box5 == "x" && box9 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}else if(box3 == "x" && box5 == "x" && box7 == "x"){
		alert("player 1 is the winner!")
		window.location.reload();
	}
	if(box1 == "o" && box2 == "o" && box3 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box4 == "o" && box5 == "o" && box6 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box7 == "o" && box8 == "o" && box9 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box1 == "o" && box4 == "o" && box7 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box2 == "o" && box5 == "o" && box8 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box3 == "o" && box6 == "o" && box9 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box1 == "o" && box5 == "o" && box9 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box3 == "o" && box5 == "o" && box7 == "o"){
		alert("player 2 is the winner!")
		window.location.reload();
	}else if(box1 !== "undefined" && box2 !== "undefined" && box3 !== "undefined" && box4 !== "undefined" && box5 !== "undefined" && box6 !== "undefined" && box7 !== "undefined" && box8!== "undefined" && box9 !== "undefined"){
	alert('Wow you filled the board! You must be pretty good a this! Play again?');
	window.location.reload();
	}
}

//checks every possible row of 3 and displays an alert to announce the winner,
//then refreshes the page

tictactoe.prototype.checkDraw = function(){
	
}

//checks after every click if there is a draw


var newGame = new tictactoe()

document.getElementById('box1').onclick = function(){
	newGame.clickBox1();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box2').onclick = function(){
	newGame.clickBox2();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box3').onclick = function(){
	newGame.clickBox3();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box4').onclick = function(){
	newGame.clickBox4();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box5').onclick = function(){
	newGame.clickBox5();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box6').onclick = function(){
	newGame.clickBox6();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box7').onclick = function(){
	newGame.clickBox7();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box8').onclick = function(){
	newGame.clickBox8();
	newGame.checkWinner();
	newGame.checkDraw();
}

document.getElementById('box9').onclick = function(){
	newGame.clickBox9();
	newGame.checkWinner();
	newGame.checkDraw();
}

//maybe give each square a status of blank, X, or O, then check the
//possibilities

//try not to hard code all tens of thousands of possibilities
