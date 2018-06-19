import MovingObject from './moving_object';
import OtherFish from './other_fish';

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById('canny');
  const c = canvas.getContext('2d');

  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  // c.fillStyle = "rgb(33, 2, 147)";
  // c.fillRect(20, 60, 100, 100);

  let fish = {
    // x: 200,
    // y: 200,
    // vx: 10,
    // yx: 10,
    pos: [300, 200],
    vel: [10, 10],
    rad: 20,
    height: 50,
    width: 50
  }

  let o_fish = {
    pos: [100, 100]
  }

  function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
  }

  let cat_fish = new MovingObject(fish);
  let other_fish = new OtherFish(o_fish);
  cat_fish.draw(c)
  other_fish.draw(c)
  window.cat_fish = cat_fish
  window.other_fish = other_fish

  // animate()
  // window.fish = fish
  // window.movingObject = movingObject




})
