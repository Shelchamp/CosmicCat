import MovingObject from './moving_object';
import OtherFish from './other_fish';
import Game from './game';

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
  let other_fish = new OtherFish(fish);
  let game = new Game

  // cat_fish.draw(c)
  // other_fish.draw(c)
  // window.cat_fish = cat_fish;
  // window.other_fish = other_fish;
  window.game = game;

  game.allFish.forEach(fish =>{

    fish.draw(c)
    console.log(fish)
  })
  for (let i = 0; i < 10; i++) {
    game.addFish(new OtherFish(fish))
  }

  game.allFish.forEach(fish =>{

    fish.draw(c)
    console.log('hi')
  })

  const makeFish = () => {
    let newFish = game.randomPositon(new OtherFish(fish));
    // debugger
    game.allFish.push(newFish)
    console.log('looooo')
  }


  window.makeFish = makeFish

  function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, 600, 400)

    for (let i = 0; i < game.allFish.length; i++) {
      game.allFish[i].update(1, c)
    }
    game.allFish[game.allFish.length-1].update(0, c)
  }
  setInterval(makeFish, 1000)
  animate();



  // animate()
  // window.fish = fish
  // window.movingObject = movingObject




})
