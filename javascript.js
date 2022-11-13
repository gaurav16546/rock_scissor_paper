//getting nodes from the html file
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const div = document.querySelector('#result');

//function to randomly return computer choice
function getComputeChoice(randomNumber) {
    if (randomNumber === 1 || randomNumber === 6 || randomNumber === 9) {
        return "scissor";
    }
    else if (randomNumber === 2 || randomNumber === 5 || randomNumber === 8) {
        return "paper";
    }
    else {
        return "rock";
    }
}

//actually play game 
function playRound(computerSelection, yourSelection) {

    // console.log(`Your choice is ${yourSelection}
    // and computer choice is ${computerSelection}`)
    if (yourSelection === "rock") {
        if (computerSelection === "rock") {
            return "draw";
        }

        else if (computerSelection === "paper") {
            return "lose";
        }
        else {
            return "win";
        }
    }
    else if (yourSelection === "scissor") {
        if (computerSelection === "scissor") {
            return "draw";
        }

        else if (computerSelection === "rock") {
            return "lose";
        }
        else {
            return "win";
        }
    }
    else {

        if (computerSelection === "paper") {
            return "draw";
        }

        else if (computerSelection === "scissor") {
            return "lose";
        }
        else {
            return "win";
        }

    }
}

//function to play a single round
function roundResult(loopGame){
    if(loopGame === 'draw'){
       let draw = document.createElement('p');
       draw.textContent = "Game is draw";
        div.appendChild(draw);
        return;
    }
    else if(loopGame === 'win'){
        let win = document.createElement('p');
        win.textContent = "You win";
        div.appendChild(win);
        return;
    }
    else{
        let lose = document.createElement('p');
        lose.textContent = "You lose";
        div.appendChild(lose);
        return;
    }
}


// function overallResult(win,lose){
//     if(win > lose)
//     {
//         console.log("You win the game.");
//     }
//     else if(lose > win )
//     console.log("You lose the game.");
//     else 
//     console.log("Game draw.");
// }



//function to play multiple round
// for (let i = 0; i < 5; i++) {
    let loopGame = "";
    let randomNumber = Math.floor(Math.random() * 10);
    let computerSelection = getComputeChoice(randomNumber)
    
    rock.addEventListener('click',() => {
    
        yourSelection = 'rock';
        loopGame = playRound(computerSelection,yourSelection);
        roundResult(loopGame);
    });
    
    paper.addEventListener('click',() => {
    
        yourSelection = 'paper';
        loopGame = playRound(computerSelection,yourSelection);
        roundResult(loopGame);
    });
    
    scissor.addEventListener('click',() => {
    
        yourSelection = 'scissor';
        loopGame = playRound(computerSelection,yourSelection);
        roundResult(loopGame);
    });
// }



// overallResult(win,lose);

