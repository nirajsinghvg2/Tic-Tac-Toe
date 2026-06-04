console.log("<Welcome to Tic Tac Toe Game>");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < wins.length; i++) {
        let [a, b, c] = wins[i];
        if (boxtext[a].innerText && boxtext[a].innerText === boxtext[b].innerText && boxtext[a].innerText === boxtext[c].innerText) {
            return true;
            
        }
    }
    return false;
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (!boxtext.innerText && !isgameover) {
            boxtext.innerText = turn;
            audioTurn.play();
            if (checkWin()) {
                document.querySelector('.info').innerText = `Game Over - ${turn} wins!`;
                isgameover = true;
                document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
                gameover.play();
            } else {
                turn = changeTurn();
                document.querySelector('.info').innerText = `Turn for ${turn}`;
            }
        }
    });
});

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector('.info').innerText = `Turn for ${turn}`;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
});