
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

// let comp_test = computer_player();
// let human_test = human_player();

// console.log(human_test, comp_test);
// console.log(game(human_test, comp_test));

/* this is the play 5 rounds part

function match() {

  let human_w = 0;
  let comp_w = 0;

  let i = 0;

  while (human_w < 5 && comp_w < 5 && i < 100) {
    i++;
    let comp_play = computer_player();
    let human_play = human_player();

    let result = game(human_play, comp_play);  

    if (result == "win" ) {
      human_w++;
      console.log("Player Win");
    } else if (result == "lose") {
      comp_w++;
      console.log("Computer Win")
    } else {
      console.log("tie");
    } 
    console.log(human_w, "-", comp_w);
  }
  if (human_w == 5) {
    console.log("Player match win!");
  } else {
    console.log("Computer match win!");
  }
}

*/

const match_report = document.createElement('h3');
const game_report = document.createElement('h4');

let game_result
let computer_choice

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function(e) {
  computer_choice = computer_player();
  game_result = game('rock', computer_choice);
  console.log(e.target);
})


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function(e) {
  computer_choice = computer_player();
  game_result = game('paper', computer_choice);
  console.log(e.target);
})

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e) {
  computer_choice = computer_player();
  game_result = game('scissors', computer_choice);
  console.log(e.target);
})


console.log(human_player);











