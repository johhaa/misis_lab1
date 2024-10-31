import { playGame } from './gameEngine.js';
import * as lcmGame from './games/lcmGame.js';
import * as progressionGame from './games/progressionGame.js';

function startGame() {
  const name = prompt("May I have your name?");
  console.log(`Hello, ${name}!`);
  const gameChoice = prompt("Choose a game:\n1 - Find the smallest common multiple (LCM Game)\n2 - Find the missing number in the geometric progression (Progression Game)");

  if (gameChoice === '1') {
    playGame(name, lcmGame);
  } else if (gameChoice === '2') {
    playGame(name, progressionGame);
  } else {
    console.log("Invalid choice. Please reload the page and choose either 1 or 2.");
  }
}

startGame();
