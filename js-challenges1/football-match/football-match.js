
// Client Brief...
// Create an application which can be used to keep track of a score in a football match.

// variables for teams and game start/stop
let teamOneScore = 0;
let teamTwoScore = 0;
let isGameStopped = true;
let finalScore = "";
let finalScoreTwo = "";
let finalScoreThree = "";
let gameCount = 0;
let winningCount = 0;
let seriesFinished = false;
let seriesWinner;

function handleStartGame() {
  if (seriesFinished == false) {
    isGameStopped = false;
    gameCount += 1;
    document.getElementById("game-started").innerHTML = "Game Started: Yes";
    updateScores();
  } else alert("The series has finished. Please record results and hit restart!")
}

// when team 1 clicked team 1 score and vise-versa
function handleTeamOneScore() {
  if (isGameStopped === false) {
    teamOneScore++;
    updateScores();
  } else alert("Game not Started!")
};
function handleTeamTwoScore() {
  if (isGameStopped === false) {
    teamTwoScore++;
    updateScores();
  } else alert("Game not Started!")
};
// button to stop the game

function handleStopGame() {
  if (isGameStopped === false) {
    isGameStopped = true;
    let winning = winningTeam();
    finalScore = "Team One: " + teamOneScore + "  |  Team Two: " + teamTwoScore + "  |  " + winning;
    document.getElementById("game-started").innerHTML = "Game Started: No"
    storeOldScores();
    teamOneScore = 0;
    teamTwoScore = 0;
    updateScores();
  } else alert("Game not Started!");
};

// declaring the winning team for stopGame
function winningTeam() {
  if (teamOneScore > teamTwoScore) {
    winningCount++;
    return "Team One is the Winner!"
  } else if (teamTwoScore > teamOneScore) {
    winningCount--;
    return "Team Two is the Winner!"
  } else return "Its a Draw!"
};
// updating scores during game
function updateScores() {
  document.getElementById("team-one-score").innerHTML = "Team One: " + teamOneScore;
  document.getElementById("team-two-score").innerHTML = "Team Two: " + teamTwoScore;
};

function storeOldScores() {
  if (gameCount === 1) {
    document.getElementById("final-results").innerHTML = `<p>Game One --- ${finalScore} </p>`;
    finalScoreTwo = finalScore;
  } else if (gameCount === 2) {
    if (winningCount == 2) {seriesWinner = "Team One wins the series!"};
    if (winningCount == -2) {seriesWinner = "Team Two wins the Series!"};
    if (seriesWinner) {
    document.getElementById("final-results").innerHTML = `
    <p>Game One --- ${finalScoreTwo} </p>
    <p>Game Two --- ${finalScore} </p>
    <p> ${seriesWinner} </p>
    `;
    seriesFinished = true;
    } else {
      document.getElementById("final-results").innerHTML = `
      <p>Game One --- ${finalScoreTwo} </p>
    <p>Game Two --- ${finalScore} </p>
    `;
    finalScoreThree = finalScoreTwo;
    finalScoreTwo = finalScore;
    }
  } else if (gameCount === 3) {
    if (winningCount == 1) {seriesWinner = "Team One wins the series!"};
    if (winningCount == -1) {seriesWinner = "Team Two wins the Series!"};
    document.getElementById("final-results").innerHTML = `
    <p>Game One --- ${finalScoreThree} </p>
    <p>Game Two --- ${finalScoreTwo} </p>
    <p>Game Three --- ${finalScore} </p>
    <p> ${seriesWinner} </p>
    `;
    seriesFinished = true;
  };
}

function handleRestartSeries() {
  teamOneScore = 0;
  teamTwoScore = 0;
  isGameStopped = true;
  finalScore = "";
  finalScoreTwo = "";
  finalScoreThree = "";
  gameCount = 0;
  winningCount = 0;
  seriesFinished = false;
  seriesWinner;
  document.getElementById("final-results").innerHTML = "";
  document.getElementById("game-started").innerHTML = "Game Started: No"
  updateScores();
}