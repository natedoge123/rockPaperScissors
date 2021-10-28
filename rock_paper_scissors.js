
function computer_player() {
  let random = parseInt(Math.random()*3);
  computer = " "; 

  if (random == 0) {
     computer = "rock";
  } else if (random == 1) {
     computer = "paper"; 
  } else {
     computer = "scissors"; 
  }
 return computer;
}	


function human_player() {
 /* return prompt("Ready? rock, paper, scissors, shoot!"); */
}


function game(human_player, computer_player) {
 
  human_player =  human_player.toString().toLowerCase();
  computer_player =  computer_player.toString().toLowerCase();


  if (human_player == computer_player)  {
   game_status = "tie";

  } else if (human_player == "rock") {

      if (computer_player == "scissors") {
        game_status = "win";
    } else {
        game_status = "lose";
    }

  } else if (human_player == "paper") {

      if (computer_player == "rock") {
        game_status = "win";
    } else {
        game_status = "lose";
    }

  } else if (human_player == "scissors") {
      if (computer_player == "rock") {

        game_status = "win";
    } else {
        game_status = "lose";
    }

  } else {
       console.log("error");
       return 0;
  }  
  return game_status;
}


const currentScore = document.createElement('h6');
const matchWinner = document.createElement('h4');

let humanScore = 0;
let compScore = 0;


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function(e)  {


    if (button.id == 'btn1') {
      player_choice = 'rock';
      computer_choice = computer_player();  
      game_result = game(player_choice, computer_choice)
  } else if (button.id == 'btn2') {
      player_choice = 'paper';
      computer_choice = computer_player();  
      game_result = game(player_choice, computer_choice)
  } else if (button.id == 'btn3') {
      player_choice = 'scissors';
      computer_choice = computer_player();  
      game_result = game(player_choice, computer_choice)
  } else {
      gameReport.append('what the hell did you do?');
  }    
    matchWinner.textContent = ' '
    matchReport.appendChild(matchWinner);

    if (game_result == 'win') {
      humanScore++;
      currentScore.textContent = 'Round win ' + humanScore + ' - ' + compScore;
      gameReport.appendChild(currentScore);

      if (humanScore > 2) {
        humanScore = 0;
        compScore = 0;
        matchWinner.textContent = 'HUMAN WIN'
        matchReport.appendChild(matchWinner);
        } 
  } else if (game_result == 'lose') {
      compScore++;
      currentScore.textContent = 'Round loss ' + humanScore + ' - ' + compScore;
      gameReport.appendChild(currentScore);
 
      if (compScore > 2) {
        humanScore = 0;
        compScore = 0;
        matchWinner.textContent = 'COMPUTER WIN'
        matchReport.appendChild(matchWinner);
        }
  } else {
     currentScore.textContent = 'Round tie ' + humanScore + ' - ' + compScore;
  }
      
  })
})

