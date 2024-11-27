
console.log("hello");
const choices = ["rock", "paper","scissors"];

function resetGame(){
  // reset game
}

function startGame(){
  //play the game until someone wins 5 times
  
  playRound();

  setWins();
}

function playRound(round){
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);

  winners.push(winner);
}

function computerSelect(){
  // todo - update the dom with the computer selection
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choice1,choice2){
  if(
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock") 
  ){
    return "Player";
  }else if (choice1 == choice2){
    return "Tie";
  }else{
    return "Computer";
  }
}

function setWins(){
  const pWinCount = winners.filter((item) => item =="Player").length;
  const cWinCount = winners.filter((item) => item =="Computer").lenght;
  const ties = winners.filter((item) => item == "Tie").length;
}
