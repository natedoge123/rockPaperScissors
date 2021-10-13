
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
  return prompt("Ready? rock, paper, scissors, shoot!");
}

function game(human_player, computer_player) {
 
  human_player =  human_player.toString().toLowerCase();
  computer_player =  computer_player.toString().toLowerCase();


  if (human_player == computer_player)  {
   game_status = "tie"

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

let comp_test = computer_player();
let human_test = human_player();

console.log(human_test, comp_test);
console.log(game(human_test, comp_test));


function match() {

  let human_w = 0;
  let comp_w = 0;

  let i = 0;

  while (human_w < 6 && comp_w <6 && i < 10) {
    i++;

  }
}










