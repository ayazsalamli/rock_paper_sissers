function computer() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }

  function playRound(player, computer1) {
    if (player === computer1) {
      return "It's a tie!";
    } else if (player === "rock" && computer1 === "scissors") {
      return "You win! You sellect rock and computer scissors";
    } else if (player === "paper" && computer1 === "rock" ) {
      return "You win! You sellect paper and computer rock";
    }else if ( player === "scissors" && computer1 === "paper" ){
      return "You win! You sellect scissors and computer paper";
    } else if (computer1 === 'scissors' && player === 'paper') {
     return "you lose! Campucter sellect scissors and you paper"
    } else if (computer1 === 'rock' && player === 'scissors') {
    return "you lose! Campucter sellect rock and you scissors"
    } else if (computer1 === 'paper' && player === 'rock') {
     return "you-lose! Campucter sellect paper and you rock"
    }
}

  function playGame(player) {
    const computer1 = computer();
    const result = playRound(player, computer1);
    document.getElementById("result").innerText = result;
  }