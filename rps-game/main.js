/* Declare global variables */

let turns = 6

let playerScore = 0
let computerScore = 0

/* Conditional to loop code 5 times */

while (turns > 1) {

    /* Wrapper function "game()" */

    function game() {

        /* Function to return computer selection */

        function computerChoice() {

            let choices = ["rock", "paper", "scissors"]

            let numero = Math.floor(Math.random() * 3)

            let computerResult = choices[numero]

            return computerResult
        }
        
        /* Function to return player selection */

        function playerChoice() {

            let playerInput = prompt("Please enter your choice: ")

            let playerResult = playerInput.toLowerCase()

            if (playerResult === "rock" || playerResult === "paper" || playerResult === "scissors") {

                return playerResult

            } else {

                throw new Error("Wrong input!")

                return

            }

        }
        
        /* Accessing function variables in a higher scope */

        let player = playerChoice()
        let computer = computerChoice()
        
        /* Logic to decide the winner of a round, and determine the score */
        
        if (player === computer) {

            console.log(`It's a tie!`)

        } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" & computer === "paper") {

            playerScore++

            console.log(`You win! Your ${player} beats the computer's ${computer}, and your score is ${playerScore}`)


        } else {

            computerScore++

            console.log(`You lose! The computer's ${computer} beats your ${player}, and the computer has won ${computerScore} rounds.`)

        }


    }

    game()
    
    /* Loop termination statement */
    
    turns--

}

/* Code to output the overall winner after 5 rounds */

if (turns == 1 && playerScore > computerScore) {

    console.log(`GAME OVER! YOU WIN! THE SCORE IS: ${playerScore} — ${computerScore}`)
} else if (computerScore === playerScore) {

    console.log(`GAME OVER! IT'S A TIE!`)

} else {

    console.log(`GAME OVER! YOU LOSE! THE SCORE IS: ${playerScore} — ${computerScore}`)

}
