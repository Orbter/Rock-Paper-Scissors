


function getComputerChoice()
{
    let computerChoice;
    const randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber <= 1){
        computerChoice = "Rock"

    }
    else if(randomNumber <=2){
        computerChoice = "Paper"
    }
    else{
        computerChoice = "Scissors"
    }
    return computerChoice;
}

function playerSelection() {
  
   
    let userInput;
     let stringlenth; 
    while (true) {
        userInput = prompt("Please enter your move!");
         userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
            if (userInput !== null && userInput.trim() !== "") {
            // User entered a non-empty move, exit the loop
            if (["Rock", "Paper", "Scissors"].includes(userInput)) {
                // Valid move, exit the loop
                break;
            }
        }
            
        alert("you entered an illegal move check your spelling or you move and try again, it ok to use upper or lower case");
    }
        
    return userInput;
}

function playRound(){
    let playerScore =0;
    let computerScore =0;
    let round = 1;

    while(playerScore !== 3 && computerScore !==3){
        let x = playerSelection();
        let y = getComputerChoice();
        console.log(`round ${round}`);
        if (x === "Rock"){
            if(y === "Rock"){
                console.log(`It's a tie! you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
            else if(y === "Paper"){
                computerScore++;
                console.log(`You lost! you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
            else{
                playerScore++;
                console.log(`You win!  you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
        }
        else if (x ==="Paper"){
            if(y === "Rock"){
                playerScore++;   
                console.log(`You win!  you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);        
            }
            else if(y === "Paper"){
                console.log(`It's a tie! you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
            else{
                computerScore++;
                console.log(`You lost! you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
        }
        else{
            if(y === "Rock"){
                computerScore++;
                console.log(`You lost! you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
            else if(y === "Paper"){
                playerScore++;
                console.log(`You win!  you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
            else{
                console.log(`It's a tie! you played ${x} and the bot played ${y} the score is ${playerScore} for you and ${computerScore} for the bot`);
            }
        }
        round++;
    }

    if (playerScore === 3){
        console.log("You killed the bot W humens!!!")
    }
    else{
        console.log("You lost! the bot almost killed you play again to kill him!")
    }
}
playRound();