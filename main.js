function play() {
  let computerMove = "";
  let botRandomPick = Math.floor(Math.random() * 3);
  let userPick = prompt("Please Type (rock) or (paper) or (scissors) To Play.");
  userPick = userPick.trim().toLocaleLowerCase();

  let moves = ["rock", "paper", "scissors"];
  computerMove = moves[botRandomPick];

  if (userPick === "rock" && computerMove === "paper") {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove} \n You Lose, Better luck next time.`
    );
  } else if (userPick === "rock" && computerMove === "scissors") {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove}  \n You win!! :)`
    );
  } else if (userPick === "paper" && computerMove === "scissors") {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove} \n You Lose, Better luck next time.`
    );
  } else if (userPick === "paper" && computerMove === "rock") {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove} \n You win!! :)`
    );
  } else if (userPick === "scissors" && computerMove === "rock") {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove} \n You Lose, Better luck next time.`
    );
  } else if (userPick === "scissors" && computerMove === "paper") {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove} \n You win!! :)`
    );
  } else if (userPick === computerMove) {
    return window.alert(
      `You Picked ${userPick} and Bot Picked ${computerMove} \n It's a Tie`
    );
  } else {
    return window.alert(
      "ERROR \nPlease Enter ONLY (rock or paper or scissors) "
    );
  }
}
