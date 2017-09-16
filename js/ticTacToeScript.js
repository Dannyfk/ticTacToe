var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");
var btn3 = document.getElementById("b3");
var btn4 = document.getElementById("b4");
var btn5 = document.getElementById("b5");
var btn6 = document.getElementById("b6");
var btn7 = document.getElementById("b7");
var btn8 = document.getElementById("b8");
var btn9 = document.getElementById("b9");

var turn = 0;
xScoreNumber = 0;
oScoreNumber = 0;

function calculateTurn(btn) {
    var symbol = "";
    if (btn.innerHTML === "X" || btn.innerHTML === "O") {
        alert("Space already taken");
    }
    if (turn === 0) {
        btn.innerHTML = "X";
        symbol = "X";
    } else {
        btn.innerHTML = "O";
        symbol = "O";
    }
    var gameWon = win(symbol);
    if (gameWon === true) {
        if(symbol === "X") {
            xScoreNumber ++;
            turn=1;
        }else {
            oScoreNumber ++;
            turn=0;
        }
        updateScore();
        reset();
    } else {
        var fullBoard = boardFull();
        if (fullBoard === true) {
            if (confirm("Board full. Play another game?") == true) {
                reset();
            } else {

            }
        }
        changeTurn();
    }
    displayTurn();
}

function win(symbol) {
    var gameWon = false;
    if (btn1.innerHTML === symbol && btn2.innerHTML === symbol && btn3.innerHTML === symbol) {
        gameWon = true;
    } else if (btn4.innerHTML === symbol && btn5.innerHTML === symbol && btn6.innerHTML === symbol) {
        gameWon = true;
    } else if (btn7.innerHTML === symbol && btn8.innerHTML === symbol && btn9.innerHTML === symbol) {
        gameWon = true;
    } else if (btn1.innerHTML === symbol && btn4.innerHTML === symbol && btn7.innerHTML === symbol) {
        gameWon = true;
    } else if (btn2.innerHTML === symbol && btn5.innerHTML === symbol && btn8.innerHTML === symbol) {
        gameWon = true;
    } else if (btn3.innerHTML === symbol && btn6.innerHTML === symbol && btn9.innerHTML === symbol) {
        gameWon = true;
    } else if (btn1.innerHTML === symbol && btn5.innerHTML === symbol && btn9.innerHTML === symbol) {
        gameWon = true;
    } else if (btn3.innerHTML === symbol && btn5.innerHTML === symbol && btn7.innerHTML === symbol) {
        gameWon = true;
    }
    return gameWon;
}

function boardFull() {
    var fullBoard = false;
    if (btn1.innerHTML != "" && btn2.innerHTML != "" && btn3.innerHTML != "" &&
        btn4.innerHTML != "" && btn5.innerHTML != "" && btn6.innerHTML != "" &&
        btn7.innerHTML != "" && btn8.innerHTML != "" && btn9.innerHTML != ""
    ) {
        fullBoard = true;
    }

    return fullBoard;
}

function changeTurn() {
    if (turn === 0) {
        turn = 1;
    } else {
        turn = 0;
    }
}

function reset() {
    btn1.innerHTML = "";
    btn2.innerHTML = "";
    btn3.innerHTML = "";
    btn4.innerHTML = "";
    btn5.innerHTML = "";
    btn6.innerHTML = "";
    btn7.innerHTML = "";
    btn8.innerHTML = "";
    btn9.innerHTML = "";
}

function updateScore(){
    var myTable = document.getElementById('myTable');
    myTable.rows[0].cells[1].innerHTML = xScoreNumber;
    myTable.rows[1].cells[1].innerHTML = oScoreNumber;
}

function displayTurn() {
    if (turn === 0){
        document.getElementById("playerTurn").innerHTML = "Player: X's turn";
    }
    else {
        document.getElementById("playerTurn").innerHTML = "Player: O's turn";
    }
}