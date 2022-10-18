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
            return "draw";
        }

        else if(computerSelection === "paper")
        {
            return "lose"
        }
        else 
        {
            return "win";
        }
    }
    else if(yourSelection === "scissor")
    {
        if(computerSelection === "scissor")
        {
            return "draw";
        }

        else if(computerSelection === "rock")
        {
            return "lose"
        }
        else 
        {
            return "win";
        }
    }
    else 
    {
    
        if(computerSelection === "paper")
        {
            return "draw";
        }

        else if(computerSelection === "scissor")
        {
            return "lose"
        }
        else 
        {
            return "win";
        }
    
    }
}
console.log(`Your choice is ${yourSelection}`);
console.log(`Computer choice is ${computerSelection}`);
console.log(playRound(computerSelection,yourSelection));