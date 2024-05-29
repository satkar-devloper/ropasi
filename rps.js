let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");




const genCompChoice = () => {
    const options = ["rock", "paperr", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissors
};


const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Draw. Play again";
    msg.style.backgroundColor = "#107786";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        uScore.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScore.innerText = computerScore;
        // console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // Generate computer choice; modular= harek kam ko lagi yek function (resuable component)
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
     // Draw Game
     drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper = computer sanga hunxa
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors 
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);    
    });
});