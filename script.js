const choices = ["rock", "paper", "scissors"];

//function to start game
function game() {
  let roundsPlayed = 0;
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner = "";

  //loop through 5 rounds, track rounds and wins
  while (roundsPlayed < 5) {
    roundsPlayed++;
    console.log("Player Score " + playerScore);
    console.log("Computer Score " + computerScore);
  

  
        //create function to play round
    function playRound(playerSelection, computerSelection) {

      let winRockScissors = "You Win! Rock beats Scissors.";
      let winPaperRock = "You Win! Paper beats Rock.";
      let winScissorsPaper = "You Win! Scissors beats Paper.";
      let loseRockScissors = "You Lose! Rock beats Scissors.";
      let losePaperRock = "You Lose! Paper beats Rock.";
      let loseScissorsPaper = "You Lose Scissors beats Paper.";
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
          const randomNum = Math.floor(Math.random() * 3 );//generate random number between 0 and 3
          switch (randomNum) {//create switch to return either rock, paper, or scissors
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
        //console.log(computerChoice());

        //create prompt for player input
          //convert player input .toLowerCase
        function playerChoice() {
          let input = prompt("Please type rock, paper, or scissors. Best of 5 wins the game.");
          playerChoice = input.toLowerCase();
          return playerChoice;
        }
        
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  // determine winner
  if (playerScore>computerScore) {
    gameWinner = "PLAYER WINS!";
  } else if (computerScore>playerScore) {
    gameWinner = "COMPUTER WINS!";
  } else {
    gameWinner = "DRAW";
  }

  // declare winner
  console.log(gameWinner);
}

game();


