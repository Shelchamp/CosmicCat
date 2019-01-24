import MovingObject from "./moving_object";
import OtherFish from "./other_fish";
import CatFish from "./cat_fish";
import Game from "./game";
import Timer from "./timer";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canny");
  // const canvasLeft = document.getElementById('canny-left');
  // const canvasRight = document.getElementById('canny-right');
  const c = canvas.getContext("2d");
  // const cLeft = canvasLeft.getContext('2d');
  // const cRight = canvasRight.getContext('2d');

  // START BUTTON
  const start = document.getElementById("start");

  // GRAB THE HIGH SCORE CONTAINER

  const scoreTracker = document.getElementById("score");

  // TIMER
  const timer = document.getElementById("timer");

  // HOLD HIGH SCORES
  let highScores = [];

  // LOGIC TO ADD SCORES
  function addScore(scores, newScore, scoreContainer = scoreTracker) {
    scores.push(newScore);
    let sortedScores = scores.sort();
    if (sortedScores.length > 5) {
      sortedScores.pop();
    }
    scoreContainer.innerHTML = "Top Scores";
    sortedScores.forEach((score, i) => {
      const newScoreLi = document.createElement("li");
      newScoreLi.classList.add("score");
      newScoreLi.innerHTML = `${i + 1}. ${score}`;
      scoreContainer.appendChild(newScoreLi);
    });
  }

  let notFirst = true;

  function gameStart() {
    game.waves = setInterval(() => {
      game.addFish();
    }, 1000);

    game.moment = setInterval(() => {
      game.momentum(game.catFish);
    }, 1000);

    animate();
    clock.timer();

    // DISABLES START BUTTON
    start.classList.add("hideStart");

    // scoreTracker.innerHTML = "Top Scores";
    // if (!notFirst) {
    //   addScore(highScores, clock.time);
    //   // console.log(notFirst);
    // } else {
    //   notFirst = false;
    // }
  }

  start.addEventListener("click", gameStart);

  // Create a clock that is hoisted above
  var clock = new Timer();
  let game = new Game();
  timer.innerHTML = clock.time;

  function animate() {
    if (game.lost === false) {
      timer.innerHTML = clock.time;
      requestAnimationFrame(animate);
      game.drawGame(c);
    } else {
      clock.stopTime();
      start.classList.remove("hideStart");
      // addScore(clock.time);
      clearInterval(game.waves);
      clearInterval(game.moment);
      addScore(highScores, clock.time);
      game.reset();
    }
  }
});
