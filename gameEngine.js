const MAX_ROUNDS = 3;

export function playGame(name, game) {
  let round = 0;

  function askQuestion() {
    if (round === MAX_ROUNDS) {
      console.log("Congratulations, " + name + "!");
      return;
    }

    const { question, correctAnswer } = game.generateQuestion();
    const answer = prompt(`Question: ${question}`);

    if (parseInt(answer) === correctAnswer) {
      console.log("Correct!");
      round++;
      askQuestion();
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  }

  askQuestion();
}
