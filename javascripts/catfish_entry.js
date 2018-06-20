import MovingObject from './moving_object';
import OtherFish from './other_fish';
import Game from './game';

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById('canny');
  const c = canvas.getContext('2d');

  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;


  let fish = {
    pos: [300, 150],
    vel: 1,
    rad: 25,
    height: 100,
    width: 50
  }

  let fish2 = {
    pos: [400, 400],
    vel: 1,
    rad: 25,
    height: 50,
    width: 50
  }


  function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
  }

  let cat_fish = new MovingObject(fish);
  let other_fish = new OtherFish(fish2);
  let game = new Game

  // cat_fish.draw(c)
  // other_fish.draw(c)
  window.cat_fish = cat_fish;
  window.other_fish = other_fish;
  window.game = game;

  game.allFish.forEach(fish =>{

    fish.draw(c)
  })
  for (let i = 0; i < 10; i++) {
    game.addFish(new OtherFish(fish))
  }

  game.allFish.forEach(fish =>{

    fish.draw(c)
  })

  const makeFish = () => {
    let newFish = game.randomize(new OtherFish(fish));

    game.allFish.push(newFish)

  }


  window.makeFish = makeFish

  function animate(){
    requestAnimationFrame(animate);
    game.drawGame(c)
    // c.clearRect(0, 0, 700, 400)
    //
    //
    //
    cat_fish.draw(c)
    //
    // game.allFish.forEach((fish, idx) =>{
    //   if (fish.pos[0] < 0 || fish.pos[0] > 700) {
    //     game.allFish.shift()
    //   }
    //
    //   if (fish.isCollidedWith(cat_fish)) {
    //     game.allFish.splice(idx, 1);
    //
    //   }
    //
    //   game.allFish[idx].update(1, c)
    //   // console.log(game.allFish.length)
    // })
    //
    // game.allFish[game.allFish.length-1].update(0, c)

    // for (let i = 0; i < game.allFish.length; i++) {
    //   if (game.allFish[i].pos[0] < 0 || game.allFish[i].pos[0] > 700) {
    //     game.allFish.shift()
    //   }
    //
    //   if (game.allFish[i].isCollidedWith(cat_fish)) {
    //     game.allFish.splice(i, 1);
    //
    //   }
    //
    //   game.allFish[i].update(1, c)
    // }





  }
  setInterval(makeFish, 1000)
  animate();



  // window.fish = fish
  // window.movingObject = movingObject




})
