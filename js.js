const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");
const userWins = [];
const pcWins = [];
const draws = [];

const scoreboard = document.getElementById("scoreBoard");

function generatebotChoice() {
    const botChoice = ['rock', 'paper', 'scissor'];
    const rand = Math.random();
    const randIndex = Math.floor(rand * 3);
    return botChoice[randIndex];
}

function game(choice) {
    scoreboard.style.display = "block";
    const botChoice = generatebotChoice();
    switch (choice + botChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            document.getElementById("result").innerHTML = "You won!!<br> you took " + choice + " and the computer took " + botChoice;
            userWins.push("Win");
            document.getElementById("topUser").innerHTML = "User wins: "+userWins.length+"<br>"+"Pc wins: "+pcWins.length+"<br>"+"Draws: "+draws.length;
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            document.getElementById("result").innerHTML = "You lose!! <br> you took " + choice + " and the computer took " + botChoice;
            pcWins.push("Win");
            document.getElementById("topUser").innerHTML = "User wins: "+userWins.length+"<br>"+"Pc wins: "+pcWins.length+"<br>"+"Draws: "+draws.length;            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            document.getElementById("result").innerHTML = "Draw!! <br> you both took " + choice;
            draws.push("Win");
            document.getElementById("topUser").innerHTML = "User wins: "+userWins.length+"<br>"+"Pc wins: "+pcWins.length+"<br>"+"Draws: "+draws.length;            break;
    }
}

function main() {
    rockDiv.addEventListener('click', function () {
        game("rock");
    })

    paperDiv.addEventListener('click', function () {
        game("paper");
    })

    scissorDiv.addEventListener('click', function () {
        game("scissor");
    })
}
main();