function getComputeChoice (randomNumber)
{
    if (randomNumber === 1 || randomNumber === 6 || randomNumber === 9)
    {
        return "scissor";
    }
    else if (randomNumber === 2 || randomNumber === 5  || randomNumber === 8)
    {
        return "paper";
    }
    else
    {
    return "rock";
    }
}

randomNumber = Math.floor(Math.random() * 10 );
const computerSelection = getComputeChoice(randomNumber);
let yourSelection = prompt("Enter your choice");
yourSelection = yourSelection.toLowerCase();
// console.log(yourSelection);

function playRound(computerSelection,yourSelection)
{
    if(yourSelection === "rock")
    {
        if(computerSelection === "rock")
        {
            return "Draw game! You both chose rock";
        }

        else if(computerSelection === "paper")
        {
            return "You lose! paper beat rock";
        }
        else 
        {
            return "You win! rock beat scissor";
        }
    }
    else if(yourSelection === "scissor")
    {
        if(computerSelection === "scissor")
        {
            return "Draw game! You both chose scissor";
        }

        else if(computerSelection === "rock")
        {
            return "You lose! rock  beat scissor";
        }
        else 
        {
            return "You win! scissor beat paper";
        }
    }
    else 
    {
    
        if(computerSelection === "paper")
        {
            return "Draw game! You both chose paper";
        }

        else if(computerSelection === "scissor")
        {
            return "You lose! scissor beat paper";
        }
        else 
        {
            return "You win! paper beat rock";
        }
    
    }
}
// console.log(`Your choice is ${yourSelection}`);
// console.log(`Computer choice is ${computerSelection}`);
console.log(playRound(computerSelection,yourSelection));