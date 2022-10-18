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

// function bothSelection

// console.log(yourSelection);


//actually play game 
function playRound(computerSelection, yourSelection) {
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
// console.log(`Your choice is ${yourSelection}`);
// console.log(`Computer choice is ${computerSelection}`);
// console.log(playRound(computerSelection, yourSelection));

let win = 0, 
lose = 0;
//function to play multiple round
for (let i = 0; i < 5; i++) {



    randomNumber = Math.floor(Math.random() * 10);
    let computerSelection = getComputeChoice(randomNumber);
    let yourSelection = prompt("Enter your choice");
    yourSelection = yourSelection.toLowerCase();
    let roundResult = playRound(computerSelection, yourSelection);
    


    if (roundResult === "draw") {
        console.log(`Game draw! you both chose ${yourSelection}`);
    }
    else if (roundResult === "win") {
        console.log(`You win! ${yourSelection} beats ${computerSelection}`);
        win+=1;
    }
    else {
        lose+=1;
        console.log(`You lose! ${computerSelection} beats ${yourSelection}`);
    }
}

overallResult(win,lose);

function overallResult(win,lose){
    if(win > lose)
    {
        console.log("You win the game.");
    }
    else if(lose > win )
    console.log("You lose the game.");
    else 
    console.log("Game draw.");
}