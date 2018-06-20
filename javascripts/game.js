import MovingObject from './moving_object';
import OtherFish from './other_fish';

class Game {
  constructor(){
    this.allFish = []
    this.catFish = new MovingObject(Game.CATFISH)
    for (let i = 0; i < 10; i++) {
      this.createFishes(new OtherFish(Game.OTHERFISH))

    }

    setInterval(()=>{
      this.addFish()
    }, 1000)
  }

  createFishes(fish){
    this.allFish.push(this.randomize(fish))
  }

  addFish(){
    let newFish = this.randomize(new OtherFish(Game.OTHERFISH))
    this.allFish.push(newFish)
  }

  drawGame(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.catFish.draw(ctx);
    this.allFish.forEach((fish, idx) =>{
      if (fish.pos[0] < 0 || fish.pos[0] > 700) {
        this.allFish.shift()
      }

      if (fish.isCollidedWith(this.catFish)) {
        this.allFish.splice(idx, 1);

      }

      this.allFish[idx].update(1, ctx)


    })
    this.allFish[this.allFish.length-1].update(0, ctx)
    // console.log(this.allFish.length)
  }

  randomize(fish){
    let random_y = Math.random() * (Game.DIM_Y - fish.rad);
    let num = Math.random();

    fish.height = fish.height * 0.25 + (fish.height * 0.75 * num)
    fish.width = fish.width * 0.25 + (fish.width * 0.75 * num)

    switch (Math.round(Math.random())) {

      case 0:
        fish.pos = [0, random_y];
        fish.vel = Math.abs(fish.vel);
        return fish;

      case 1:
        fish.pos = [Game.DIM_X - fish.rad, random_y];
        fish.vel = -fish.vel;
        return fish;

      default:
        fish.pos = [Game.DIM_X - fish.rad, random_y];
        fish.vel = -fish.vel;
        return fish;
    }
  }

}

Game.DIM_X = 700;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS;
Game.CATFISH = {
  pos: [300, 150],
  vel: 1,
  rad: 25,
  height: 100,
  width: 50
}

Game.OTHERFISH = {
  pos: [400, 400],
  vel: 1,
  rad: 25,
  height: 50,
  width: 50
}


export default Game;
