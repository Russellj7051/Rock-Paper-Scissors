const roundResults = document.querySelector('.round-results');
const playerWinText = document.querySelector('.player-score');
const computerWinText = document.querySelector('.computer-score');
const gameResult = document.querySelector('.display-winner');


//function to start game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner = "";
  
  // Player Selection 
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection = button.className;
      const computerSelection = computerChoice();
      roundResults.textContent = (playRound(playerSelection, computerSelection));
      playerWinText.textContent = "Player Score: " + playerScore;
      computerWinText.textContent = "Computer Score: " + computerScore;
      endGame() 

    })
  })
        //create function to play round
    function playRound(playerSelection, computerSelection) {

      let winRockScissors = "You Win! Rock beats Scissors.";
      let winPaperRock = "You Win! Paper beats Rock.";
      let winScissorsPaper = "You Win! Scissors beats Paper.";
      let loseRockScissors = "You Lose! Rock beats Scissors.";
      let losePaperRock = "You Lose! Paper beats Rock.";
      let loseScissorsPaper = "You Lose! Scissors beats Paper.";
      let tie = "It's a Tie!";

      if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return winRockScissors;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return winPaperRock;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return winScissorsPaper;
      } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++
        return loseRockScissors;
      } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        return losePaperRock;
      } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++
        return loseScissorsPaper;
      } else if (playerSelection === computerSelection) {
        return (tie);
      }
    }

      //create function for computerSelection
      function computerChoice() {
        const randomNum = Math.floor(Math.random() * 3 );
        switch (randomNum) {
        case 0:
          return "rock"
          break;
        case 1:
          return "paper"
          break;
        case 2:
          return "scissors"
          break;
      }
      }
  
  const winnerMessage = document.createElement('h1');
  winnerMessage.style.color = "whitesmoke";
  winnerMessage.style.textAlign = "center";
  winnerMessage.textContent = gameWinner;
  gameResult.appendChild(winnerMessage);

  //displays a winner after 5 rounds
  function endGame() {
    if (playerScore === 5) {
      gameWinner = "YOU WON THE WAR!"
      winnerMessage.textContent = gameWinner;

      //disable buttons after game
      document.querySelector('.rock').disabled = true;
      document.querySelector('.paper').disabled = true;
      document.querySelector('.scissors').disabled = true;

      //displays play again button
      const playAgain = document.createElement('button');
      playAgain.style.display = "block";
      playAgain.style.margin = " 0 auto";
      playAgain.textContent = "Play Again!";
      gameResult.appendChild(playAgain);

      //reloads page
      playAgain.addEventListener('click', () => {
        location.reload();
      })

    }else if (computerScore === 5) {
      gameWinner = "YOU LOST THE WAR!"
      winnerMessage.textContent = gameWinner;

      //disable buttons after game
      document.querySelector('.rock').disabled = true;
      document.querySelector('.paper').disabled = true;
      document.querySelector('.scissors').disabled = true;
      

      //display play again button
      const playAgain = document.createElement('button');
      playAgain.style.display = "block";
      playAgain.style.margin = " 0 auto";
      playAgain.textContent = "Play Again!";
      gameResult.appendChild(playAgain);

      //reloads page
      playAgain.addEventListener('click', () => {
        location.reload();
      })
    }
  }    


  
}

game();


