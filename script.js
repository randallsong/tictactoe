//tic tac toe javacript
//function that takes into account whose turn it is and changes
//the square accordingly
	var turn = 0;

function tictactoe(){

}

tictactoe.prototype.clickX = function(){
	if(turn = 0){
	document.getElementById('x1').style.display = "block";
	turn++;
	}
	else{
		alert("you can't do that")
	}
}

tictactoe.prototype.clickO = function(){
	if (turn = 1){
	document.getElementById('o1').style.display = "block";
	turn--;
	}
}

// tictactoe.prototype.clickX2 = function(){
// 	document.getElementById('box2') = document.getElementById('box2').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX3 = function(){
// 	document.getElementById('box3') = document.getElementById('box3').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX4 = function(){
// 	document.getElementById('box4') = document.getElementById('box4').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX5 = function(){
// 	document.getElementById('box5') = document.getElementById('box5').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX6 = function(){
// 	document.getElementById('box6') = document.getElementById('box6').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX7 = function(){
// 	document.getElementById('box7') = document.getElementById('box7').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX8 = function(){
// 	document.getElementById('box8') = document.getElementById('box8').style.display = block;
// 	turn++;
// }

// tictactoe.prototype.clickX9 = function(){
// 	document.getElementById('box9') = document.getElementById('box9').style.display = block;
// 	turn++;
// }


newGame = new tictactoe()

document.getElementById('box1').onclick = function(){
	newGame.clickX();
}

// document.getElementById('box2').onclick = function(){
// 	newGame.clickX2();
// }

// document.getElementById('box3').onclick = function(){
// 	newGame.clickX3();
// }

// document.getElementById('box4').onclick = function(){
// 	newGame.clickX4();
// }

// document.getElementById('box5').onclick = function(){
// 	newGame.clickX5();
// }

// document.getElementById('box6').onclick = function(){
// 	newGame.clickX6();
// }

// document.getElementById('box7').onclick = function(){
// 	newGame.clickX7();
// }

// document.getElementById('box8').onclick = function(){
// 	newGame.clickX8();
// }

// document.getElementById('box9').onclick = function(){
// 	newGame.clickX9();
// }

//a function that check if there is a row of three anywhere and
//ends the game when it finds one

//maybe give each square a status of blank, X, or O, then check the
//possibilities

//try not to hard code all tens of thousands of possibilities