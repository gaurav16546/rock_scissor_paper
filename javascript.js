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
    else return "rock";
}

randomNumber = Math.floor(Math.random() * 10 );
const computerSelection = getComputeChoice(randomNumber);
// const yourSelection = prompt("Enter your choice");
console.log(computerSelection)