import MovingObject from "./moving_object";
import OtherFish from "./other_fish";
import CatFish from "./cat_fish";
import Game from "./game";
import Timer from "./timer";

document.addEventListener("DOMContentLoaded", () => {
  // Get Canvas
  const canvas = document.getElementById("canny");
  const c = canvas.getContext("2d");

  // START BUTTON
  const start = document.getElementById("start");

  // GRAB THE HIGH SCORE CONTAINER
  const scoreTracker = document.getElementById("score");

  // GET TIMER
  const timer = document.getElementById("timer");

  // HOLD HIGH SCORES
  let highScores = [];

  // LOGIC TO ADD SCORES
  function addScore(scores, newScore, scoreContainer = scoreTracker) {
    // Adds the newest score
    scores.push(newScore);

    // Sorts all the scores
    let sortedScores = scores.sort();

    // Only keep the top 5 scores
    if (sortedScores.length > 5) {
      sortedScores.pop();
    }

    // This clears the Score Container so that we don't end up
    // duplicates. IMPORTANT CODE
    scoreContainer.innerHTML = "Top Scores";

    // Adds each score into the score container
    sortedScores.forEach((score, i) => {
      const newScoreLi = document.createElement("li");
      newScoreLi.classList.add("score");
      newScoreLi.innerHTML = `${i + 1}. ${score}`;
      scoreContainer.appendChild(newScoreLi);
    });
  }

  // GAME START FUNCTION
  function gameStart() {
    // Add enemies
    game.started = true;
    game.waves = setInterval(() => {
      game.addFish();
    }, 1000);

    // Add momentum physics
    game.moment = setInterval(() => {
      game.momentum(game.catFish);
    }, 1000);

    // Animate the game
    animate();

    // Start game timer
    clock.startTime();

    // DISABLES START BUTTON
    start.classList.add("hide");

    const timeCon = document.getElementsByClassName("timer-container")[0];

    // console.log(timeCon.childNodes);

    while (timeCon.childNodes.length > 7) {
      timeCon.removeChild(timeCon.childNodes[7]);
    }
  }

  // ADD EVENT LISTENERS FOR START BUTTON

  // Hitting SPACE will start the game
  window.addEventListener("keydown", event => {
    let code = event.code;
    // Only let SPACE start the game if it hasn't already begun
    if (code === "Space" && !game.started) {
      gameStart();
    }
  });

  // Clicking on the button will start the game
  start.addEventListener("click", gameStart);

  // Create a clock that is hoisted above
  var clock = new Timer();
  let game = new Game();
  timer.innerHTML = clock.time;

  function animate() {
    if (!game.over) {
      // Draws the time
      timer.innerHTML = clock.time;
      requestAnimationFrame(animate);
      game.drawGame(c);
    } else {
      // Stop clock
      clock.stopTime();

      // Make Start button visiable again
      start.classList.remove("hide");

      // Stop spawning enemies and stop game physics
      clearInterval(game.waves);
      clearInterval(game.moment);

      // Add current score to high scores if you won
      if (game.won) {
        addScore(highScores, clock.time);
      }

      // Reset the game
      game.reset();
    }
    // ANIMATE END
  }
  // TEST//
  // game.gameWon(true);
});
