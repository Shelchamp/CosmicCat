import MovingObject from './moving_object';
import OtherFish from './other_fish';
import CatFish from './cat_fish';
import Game from './game';

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById('canny');
  // const canvasLeft = document.getElementById('canny-left');
  // const canvasRight = document.getElementById('canny-right');
  const c = canvas.getContext('2d');
  // const cLeft = canvasLeft.getContext('2d');
  // const cRight = canvasRight.getContext('2d');
  const start = document.getElementById('start');



  function gameStart(){

    game.waves = setInterval(()=>{
      game.addFish()
    }, 1000)

    game.moment = setInterval(()=>{
      game.momentum(game.catFish)
    }, 1000)

    animate()

    start.classList.add('hideStart');
  }



  start.addEventListener("click", gameStart)

  let game = new Game

  function animate(){

    if (game.lost === false) {
      requestAnimationFrame(animate);
      game.drawGame(c)
    } else {
        clearInterval(game.waves)
        clearInterval(game.moment)
    }

  }








})
