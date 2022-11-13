const game = () => {
    let yourScore = 0,
        computerScore = 0;

    const playGame = () => {

        const rockbtn = document.getElementById('rock');
        const paperbtn = document.getElementById('paper');
        const scissorbtn = document.getElementById('scissor');
        const yourchoice = [rockbtn, scissorbtn, paperbtn];
        const computerchoice = ['rock', 'scissor', 'paper'];
        
        yourchoice.forEach(option => {
            option.addEventListener('click', function () {
                const randomNumber = Math.floor(Math.random() * 3);
                const computerSelection = computerchoice[randomNumber];

                roundResult(computerSelection, this.innerText);

                if (yourScore === 5 || computerScore === 5) {
                    gameOver(yourchoice);
                }
            })
        });
    }

    playGame();

    function roundResult(computerSelection, yourSelection) {
        yourSelection = yourSelection.toLowerCase();
        const div = document.querySelector('.result');
        const playerScore = document.querySelector('.p-count');
        const aiScore = document.querySelector('.c-count');


        if (yourSelection === "rock") {
            if (computerSelection === "rock") {
                div.textContent = "Draw";
            }

            else if (computerSelection === "paper") {
                div.textContent = "lose";
                computerScore++;
                aiScore.textContent ="Computer score:" + computerScore;
            }
            else {
                div.textContent = "win";
                yourScore++;
                playerScore.textContent ="Your score:" + yourScore;
            }
        }
        else if (yourSelection === "scissor") {
            if (computerSelection === "scissor") {
                div.textContent = "Draw";
            }

            else if (computerSelection === "rock") {
                div.textContent = "lose";
                computerScore++;
                aiScore.textContent ="Computer score:" + computerScore;
            }

            else {
                div.textContent = "win";
                yourScore++;
                playerScore.textContent ="Your score:" + yourScore;
            }
        }
        else {

            if (computerSelection === "paper") {
                div.textContent = "Draw";
            }

            else if (computerSelection === "scissor") {
                div.textContent = "lose";
                computerScore++;
                aiScore.textContent ="Computer score:" + computerScore;
            }
            else {
                div.textContent = "win";
                yourScore++;
                playerScore.textContent ="Your score:" + yourScore;
            }

        }
    }

    const gameOver = (yourchoice,) => {
       
       const restartBtn = document.querySelector('.restart');
        const overall = document.querySelector('.overall-result');
        yourchoice.forEach(option => {
            option.style.display = 'none';
        });


        if (yourScore === 5) {
            overall.textContent = "Congratulation! You won."
        }
        else {
            overall.textContent = "You lost. Better luck next time!";
        }

        restartBtn.style.display = 'flex';
        restartBtn.addEventListener('click', () =>{
            window.location.reload();
        })
    }
}

game();

