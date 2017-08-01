//tic tac toe javacript
//function that takes into account whose turn it is and changes
//the square accordingly

var turn = 0;

var box1 = "undefined";

var status = [box1, "undefined", "undefined",
			  "undefined", "undefined", "undefined", 
			  "undefined", "undefined", "undefined"];

function tictactoe(){}



tictactoe.prototype.clickBox1 = function(){
		if(turn == 0){
			document.getElementById('x1').style.display = "block";
			turn++;
			status[0] = "x";
		}else if(turn == 1){
			document.getElementById('o1').style.display = "block";
			turn--;
			status[0] = "o";
		}
}

tictactoe.prototype.clickBox2 = function(){
		if(turn == 0){
			document.getElementById('x2').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o2').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox3 = function(){
		if(turn == 0){
			document.getElementById('x3').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o3').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox4 = function(){
		if(turn == 0){
			document.getElementById('x4').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o4').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox5 = function(){
		if(turn == 0){
			document.getElementById('x5').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o5').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox6 = function(){
		if(turn == 0){
			document.getElementById('x6').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o6').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox7 = function(){
		if(turn == 0){
			document.getElementById('x7').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o7').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox8 = function(){
		if(turn == 0){
			document.getElementById('x8').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o8').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.clickBox9 = function(){
		if(turn == 0){
			document.getElementById('x9').style.display = "block";
			turn++;
		}else if(turn == 1){
			document.getElementById('o9').style.display = "block";
			turn--;
		}
}

tictactoe.prototype.checkWinner = function(){

}

var newGame = new tictactoe()


document.getElementById('box1').onclick = function(){
	newGame.clickBox1();
	if(turn == 0){
		status[0] = "x";
	}else if(turn == 1){
		status[0] = "o";
	}
}

document.getElementById('box2').onclick = function(){
	newGame.clickBox2();
}

document.getElementById('box3').onclick = function(){
	newGame.clickBox3();
}

document.getElementById('box4').onclick = function(){
	newGame.clickBox4();
}

document.getElementById('box5').onclick = function(){
	newGame.clickBox5();
}

document.getElementById('box6').onclick = function(){
	newGame.clickBox6();
}

document.getElementById('box7').onclick = function(){
	newGame.clickBox7();
}

document.getElementById('box8').onclick = function(){
	newGame.clickBox8();
}

document.getElementById('box9').onclick = function(){
	newGame.clickBox9();
}
//maybe give each square a status of blank, X, or O, then check the
//possibilities

//try not to hard code all tens of thousands of possibilities