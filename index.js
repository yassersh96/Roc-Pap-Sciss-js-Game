"use strict";

// Select Elemnts
const playerName = document.querySelector(".player-name");
const img0 = document.getElementById("img-0")
const selectedPlayer = document.querySelector(".selected");
const playerScore = document.querySelector(".player-score");
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const restBtn = document.querySelector(".reset");
const img1 = document.getElementById("img-1");
const compSelect = document.querySelector(".comp-select");
const compScore = document.querySelector(".comp-score");
const round = document.querySelector(".round");
const footer = document.querySelector(".footer");
const result = document.querySelector(".result");

// condtions 
const plyName = window.prompt("Enter Your Name")
console.log(plyName)
plyName != "" ? playerName.innerHTML =  plyName[0].toUpperCase() + plyName.slice(1) : playerName.innerHTML =  "Player";

// Paper Button 
paperBtn.addEventListener("click", ()=> {
    img0.src = "./images/paper.jpg";
    selectedPlayer.innerHTML = "paper".toUpperCase();
    play()
});

// Rock Button
rockBtn.addEventListener("click", ()=> {
    img0.src = "./images/rock.jpg";
    selectedPlayer.innerHTML = "rock".toUpperCase();
    play()
});

// Scissors Button
scissorsBtn.addEventListener("click", ()=> {
    img0.src = "./images/scissors.jpg";
    selectedPlayer.innerHTML = "scissors".toUpperCase();
    play()
});

// restBtn Button 
restBtn.addEventListener('click',reset)



// Game Functionality
let scPl = 0;
let scCom = 0;
let count = 1;
start()
const items = ["paper", "rock", "scissors"];


function play() {
let randNum = Math.round(Math.random()*2);
let selPl=selectedPlayer.innerHTML.toLocaleLowerCase();
let selCom = items[randNum];

if(selPl == "") {
    alert("Please choose one of the options")
} else {
if (count <= 10) {
compSelect.innerHTML = items[randNum].toUpperCase();
img1.src=`./images/${items[randNum]}.jpg`;
    round.innerHTML = count++;
    if(selPl == "rock") {
        if(selCom == "paper") {
            scCom++
            compScore.innerHTML = scCom;
        } else if (selCom == "scissors") {
            scPl++
            playerScore.innerHTML = scPl;
        }
    
    } else if (selPl == "paper") {
        if(selCom == "rock") {
            scPl++
            playerScore.innerHTML = scPl;
        } else if (selCom == "scissors") {
            scCom++
            compScore.innerHTML = scCom;
        }     
    } else {
        if(selCom == "rock") {
            scCom++
            compScore.innerHTML = scCom;
        } else if (selCom == "paper") {
            scPl++
            playerScore.innerHTML = scPl;
        } 
    }
    if(count == 11) {
        paperBtn.style.visibility = "hidden";
        rockBtn.style.visibility = "hidden";
        scissorsBtn.style.visibility = "hidden";
        setTimeout(checkWinner,1000)
    }
    
} 
}
};

function checkWinner() {
    if (scPl > scCom ) {
        result.innerHTML = "You Win";
    } else if (scPl < scCom) {
        result.innerHTML = "You Loss"
    } else {
        result.innerHTML = "Draw"
    }
}


function start() {
    count++
};



function reset() {
    img0.src = './images/placeholder.jpg';
    img1.src = './images/placeholder.jpg';
    selectedPlayer.innerHTML = '';
    round.innerHTML = 1;
    paperBtn.style.visibility = "visible";
    rockBtn.style.visibility = "visible";
    scissorsBtn.style.visibility = "visible";
    compSelect.innerHTML = '';
    result.innerHTML = '';
    compScore.innerHTML = "0";
    playerScore.innerHTML = "0";
    scPl = 0;
    scCom = 0;
    count = 1;
};
