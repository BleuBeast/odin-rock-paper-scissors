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

function getHumanChoice()
{
    var answer = prompt("Rock Paper or Scissors?");
    answer = capFirstLetter(answer);
    if (answer == "Rock" || answer == "Paper" || answer == "Scissors")
    {
        return answer;
    }
    else
    {
        alert("Invalid Answer, Try Again");
        return getHumanChoice();
    }
}

function capFirstLetter(word)
{
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound()
{
    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice();

    switch (computerChoice[humanChoice])
    {
        case "Win":
            {
                console.log("You Lose! " + computerChoice.Pick + " beats " + humanChoice + "!");
                return {"winner": "computer", "computerChoice": computerChoice.Pick, "humanChoice": humanChoice}
            }
        case "Tie":
            {
                console.log("You Tie! " + computerChoice.Pick + " ties " + humanChoice + "!");
                return {"winner": "tie", "computerChoice": computerChoice.Pick, "humanChoice": humanChoice}
            }
        case "Lose":
            {
                console.log("You Win! " + humanChoice + " beats " + computerChoice.Pick + "!");
                return {"winner": "human", "computerChoice": computerChoice.Pick, "humanChoice": humanChoice}
            }
    }
}

function playGame()
{
    var humanScore = 0;
    var computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        let result = playRound();
        if (result.winner == "human")
        {
            humanScore++;
        }
        else if (result.winner == "tie")
        {
            i--;
        }
        else if (result.winner == "computer")
        {
            computerScore++;
        }
        console.log("Current Score: Human - " + humanScore + ", Computer - " + computerScore + ",");
    }

    if (humanScore > computerScore)
    {
        console.log("Congratulations! You Win!");
    }
    else
    {
        console.log("You lose, that's unfortunate");
    }
}

playGame();