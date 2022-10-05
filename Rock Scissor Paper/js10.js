const rockbtn = document.getElementById("rock-btn");
const paperbtn = document.getElementById("paper-btn");
const scissorbtn = document.getElementById("scissor-btn");

const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let cmpScore = 0;
let usrScore = 0;

const increment = (string) => 
{
if ( string == "Computer")
{
    cmpScore++;
    computerScore.innerHTML = cmpScore;
}
else
{
    usrScore++;
    userScore.innerHTML = usrScore;
}
}
const runGame = (name) => 
{
    const userinput = name;
    const values = ["Rock","Paper","Scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    const computerInput = values [randomNumber];

    userChoice.innerHTML = "You Pick " + userinput;
    computerChoice.innerHTML = "Computer Pick " + computerInput;

    if (userinput == "Rock"){
        if (computerInput == "Rock")
        {
            result.innerHTML = "Draw";
        }
        else if (computerInput == "Paper")
        {
            result.innerHTML = "You Lose";
            increment("Computer");
        }
        else {
            result.innerHTML = "You Win";
            increment ("User");
        }
    }

    if (userinput == "Paper"){
        if (computerInput == "Paper")
        {
            result.innerHTML = "Draw";
        }
        else if (computerInput == "Scissor")
        {
            result.innerHTML = "You Lose";
            increment("Computer");
        }
        else {
            result.innerHTML = "You Win";
            increment ("User");
        }
    }

    if (userinput == "Scissor"){
        if (computerInput == "Scissor")
        {
            result.innerHTML = "Draw";
        }
        else if (computerInput == "Rock")
        {
            result.innerHTML = "You Lose";
            increment("Computer");
        }
        else {
            result.innerHTML = "You Win";
            increment ("User");
        }
    }
}


rockbtn.addEventListener("click",() => {
    runGame("Rock");
});

paperbtn.addEventListener("click",() => {
    runGame("Paper");
});

scissorbtn.addEventListener("click",() => {
    runGame("Scissor");
});
