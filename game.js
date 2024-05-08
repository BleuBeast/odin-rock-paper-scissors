function getComputerChoice()
{
    var options = [
        {
            "Pick": "Rock",
            "Scissors": "Win",
            "Rock": "Tie",
            "Paper": "Lose",
        },
        {
            "Pick": "Paper",
            "Rock": "Win",
            "Paper": "Tie",
            "Scissors": "Lose",
        },
        {
            "Pick": "Scissors",
            "Paper": "Win",
            "Scissors": "Tie",
            "Rock": "Lose",
        },
    ];
    var randNum = Math.floor(Math.random() * 3);
    return options[randNum];
}

function updateScore()
{
    const scoreboard = document.querySelector(".scoreboard");
    scoreboard.textContent = "Human Score: " + humanScore + " | Computer Score: " + computerScore;
}

function updateResult(resultText)
{
    if(humanScore >= 5 || computerScore >= 5)
    {
        gameOver();
    }
    else
    {
        const result = document.querySelector(".results");
        result.textContent = resultText;
    }
}

function gameOver()
{
    const result =  document.querySelector(".results");
    if(humanScore >= 5)
    {
        result.textContent = "You win! Congratulations!";
    }
    if(computerScore >= 5)
    {
        result.textContent = "You lose! Get better!";
    }
    humanScore = 0;
    computerScore = 0;
}

function playRound(humanChoice)
{
    var computerChoice = getComputerChoice();

    switch (computerChoice[humanChoice])
    {
        case "Win":
            {
                computerScore++;
                updateScore();
                updateResult("You Lose! " + computerChoice.Pick + " beats " + humanChoice + "!");
                break;
            }
        case "Tie":
            {
                updateScore();
                updateResult("You Tie! " + computerChoice.Pick + " ties " + humanChoice + "!");
                break;
            }
        case "Lose":
            {
                humanScore++;
                updateScore();
                updateResult("You Win! " + humanChoice + " beats " + computerChoice.Pick + "!");
                break;
            }
    }
}

let humanScore = 0;
let computerScore = 0;

const btn_rock = document.querySelector("#rock");
btn_rock.addEventListener("click", () => {
    playRound("Rock");
});

const btn_paper = document.querySelector("#paper");
btn_paper.addEventListener("click", () => {
    playRound("Paper");
});

const btn_scissors = document.querySelector("#scissors");
btn_scissors.addEventListener("click", () => {
    playRound("Scissors");
});