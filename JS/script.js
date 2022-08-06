// app.js

// Complete logic of game inside this function
const container = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;
	//choice
	var you;
	var choices = ["rock", "paper", "scissor"];

	window.onload = function () {
		for (let i = 0; i < 3; i++) {
			let choice = document.createElement("img");
			choice.id = choices[i];
			choice.src = choices[i] + ".png";
			choice.addEventListener("click", selectChoice);
			document.getElementById("choices").append(choice);
		}
	}

	function selectChoice() {
		you = this.id;
		document.getElementById("your-choice").src = you + ".png";

		//random for oppponent
		opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
		document.getElementById("opponent-choice").src = opponent + ".png";

	}
	// Function to
	const playGame = () => {
		choice = document.querySelector('#choices');
		const playerOptions = [choice];
		const computerOptions = ['rock', 'paper', 'scissors']

		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click', function () {

				const movesLeft = document.querySelector('.move');
				moves++;
				movesLeft.innerText = `Moves left :${10 - moves}`;


				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(you, computerChoice)

				// Calling gameOver function after 10 moves
				if (moves == 10) {
					gameOver(playerOptions, movesLeft);
				}
			})
		})

	}

	// Function to decide winner
	const winner = (player, computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if (player === computer) {
			result.textContent = 'Tie'
		}
		else if (player == 'rock') {
			if (computer == 'paper') {
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			} else {
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if (player == 'scissor') {
			if (computer == 'rock') {
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if (player == 'paper') {
			if (computer == 'scissor') {
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions, movesLeft) => {

		const chooseMove = document.querySelector('.movesleft');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})


		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if (playerScore > computerScore) {
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if (playerScore < computerScore) {
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else {
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();

}

// Calling the game function
container();
