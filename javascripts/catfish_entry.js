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
  const start = document.getElementById("start");

  // TIMER
  const timer = document.getElementById("timer");

  // This will help us stop the timer once the game ends

  function gameStart() {
    game.waves = setInterval(() => {
      game.addFish();
    }, 1000);

    game.moment = setInterval(() => {
      game.momentum(game.catFish);
    }, 1000);

    animate();
    clock.timer();
    start.classList.add("hideStart");
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
      clock.stop = true;
      clearInterval(game.waves);
      clearInterval(game.moment);
    }
  }
});
