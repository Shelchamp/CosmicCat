import MovingObject from './moving_object';
import OtherFish from './other_fish';
import CatFish from './cat_fish';

class Game {
  constructor(){
    this.allFish = []
    this.catFish = new CatFish(Game.CATFISH)

    // CREATES FIRST BATCH OF FISH
    for (let i = 0; i < Game.NUM_FISH; i++) {
      this.addFish()
    }

    this.catFish.bindKeyHandlers()

    // CREATE A FISH EVERYTHING SECOND
    setInterval(()=>{
      this.addFish()
    }, 500)





    //constructor end
  }


  // ADDS A NEW FISH
  addFish(){
    let newFish = this.randomize(new OtherFish(Game.OTHERFISH))
    this.allFish.push(newFish)

    // addFish end
  }

  // DRAWS EVERYTHING
  drawGame(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.catFish.update(this.catFish.vel, ctx);

    this.allFish.forEach((fish, idx) =>{
      if (fish.pos[0] < 0 || fish.pos[0] > 700) {
        this.allFish.shift()
      }

      if (fish.isCollidedWith(this.catFish)) {
        if (fish.height < this.catFish.height) {
          this.catFish.height += 2;
          this.catFish.width += 2;
        }
        this.allFish.splice(idx, 1);
      }


      // draws each fish
      this.allFish[idx].update(1, ctx)


    })
    this.allFish[this.allFish.length-1].update(0, ctx)
    this.wrap(this.catFish)
    if(this.catFish.height > 100){
      this.catFish.height = 25
      this.catFish.width = 25
    }
    console.log(this.catFish.pos)

    // drawGame end
  }

  // GIVES FISH A RANDOM POSITION
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

    // randomize end
  }

  wrap(fish){
    if (fish.pos[0] < -fish.width/2) {
      fish.pos[0] = Game.DIM_X - fish.width/2
    } else if (fish.pos[0] > Game.DIM_X - fish.width/2 ){
      fish.pos[0] = -fish.width/2
    } else if (fish.pos[1] < -fish.height/2){
      fish.pos[1] = Game.DIM_Y - fish.height/2
    } else if (fish.pos[1] > Game.DIM_Y - fish.height/2){
      fish.pos[1] = fish.height/2
    }
  }

  // class end
}

// CLASS CONSTANTS
Game.DIM_X = 700;
Game.DIM_Y = 400;
Game.NUM_FISH = 10;

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
