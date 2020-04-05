let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
     return "Scissors";
}

// Win Function
function win(user, pc) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(user)}${smallUserWord} beats ${convertToWord(pc)}${smallCompWord}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}


// Lose Function
function lose(user, pc) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(user)}${smallUserWord} loses to ${convertToWord(pc)}${smallCompWord}. You lost!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

// Draw Function
function draw(user, pc) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML =`${convertToWord(user)}${smallUserWord} equals ${convertToWord(pc)}${smallCompWord}. It's a Draw!`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
  
            win(userChoice, computerChoice);
        break;
        case "sr":
        case "rp":
        case "ps": 

            lose(userChoice, computerChoice);
        break;
        case "ss":
        case "rr":
        case "pp":

            draw(userChoice, computerChoice);
            break; 
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click', () => game("p"));
    
    scissors_div.addEventListener('click', () => game("s"));
}

main();