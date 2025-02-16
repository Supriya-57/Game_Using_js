let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultText = document.getElementById("result");

// Generate Computer's Choice
const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

// Add Event Listeners to Choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

// Play Game
const playGame = (userchoice) => {
    const compchoice = gencompChoice();

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin, userchoice, compchoice);
    }
};

// Draw Case
const drawGame = () => {
    resultText.innerText = "It's a draw!";
    resultText.style.color = "blue";
};

// Show Winner and Update Score
const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScoreSpan.innerText = userScore;
        resultText.innerText = `You win! ${userchoice} beats ${compchoice}`;
        resultText.style.color = "green";
    } else {
        compScore++;
        compScoreSpan.innerText = compScore;
        resultText.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        resultText.style.color = "red";
    }
};
