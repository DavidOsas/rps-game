let turns = 0

/* Conditional to loop code 5 times */

while (turns < 5) {
	    
	    /* Main function to wrap everything */
	    
	    function game() {
		            let choices = ["rock", "paper", "scissors"]
		            
		            /* Function to return the computer's choice */
		            
		            function getComputerChoice() {
				              
				                let number = Math.floor(Math.random() * 3)
				                
				                let computerChoice = choices[number]
				                
				                return computerChoice
				            }
		            
		            getComputerChoice()
		            
		            /* Function to return the player's choice */
		            
		            let playRound = (playerSelection, computerSelection) => {
				                
				                let playerPrompt = prompt("Please enter your choice: ")
				                
				                let playerChoice = playerPrompt.toLowerCase()
				                
				                if( playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
							                
							                turns++
							                return playerChoice
							                
							            } else {
									                    
									                    alert("Wrong input!!!")
									                    
									                }
				            }
		            
		            playRound()
		            
		            /* Accessing the returned values outside their function scope */
		            
		            let playerResult = playRound()
		            let computerResult = getComputerChoice()
		            
		            /* Creating variables to keep score */
		            
		            let playerScore = 0
		            let computerScore = 0
		            
		            /* Conditional to keep track of score and determine the winner */
		            
		            if ( choices.indexOf(computerResult) == 0 && choices.indexOf(playerResult) == 2 ) {
				                
				                playerScore++
				                
				            } else if ( choices.indexOf(playerResult) == 0 && choices.indexOf(computerResult) == 2 ) {
						                
						                playerScore++
						                
						               } else if ( choices.indexOf(playerResult) > choices.indexOf(computerResult) ){
								                      
								                      playerScore++
								                      
								                  }
		               
		               else if ( choices.indexOf(playerResult) < choices.indexOf(computerResult) ) {
				                      
				                      computerScore++
				                      
				                  } else if ( choices.indexOf(playerResult) == choices.indexOf(computerResult) ) {
							                 
							                 return
							                 
							             }
		            
		            /* Logging returned values to the console */
		            
		            console.log(`You played ${playRound()} and your current score is ${playerScore}, while the computer played ${getComputerChoice()}, and it has a score of ${computerScore}`)
		            
		        }
	    
	    /* Calling wrapper function "game()" */
	    
	    game()
	    
	    /* Termination condition for loop */
	    
	    turns++
	    
}
