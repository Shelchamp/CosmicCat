import MovingObject from './moving_object';
import OtherFish from './other_fish';
import CatFish from './cat_fish';
import Game from './game';

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById('canny');
  const c = canvas.getContext('2d');


  let game = new Game


  function animate(){
    requestAnimationFrame(animate);
    game.drawGame(c)

  }

  // animate();




})
