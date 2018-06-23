import MovingObject from './moving_object';
import OtherFish from './other_fish';
import CatFish from './cat_fish';

class Game {
  constructor(){
    this.lost = false
    this.allFish = []
    this.catFish = new CatFish(Game.CATFISH)
    this.wow = [Game.WOW1, Game.WOW2, Game.WOW3]
    this.meow = Game.MEOW
    this.purr = Game.PURR
    this.waves = null;
    this.moment = null;

    // CREATES FIRST BATCH OF FISH
    for (let i = 0; i < Game.NUM_FISH; i++) {
      this.addFish()
    }

    this.catFish.bindKeyHandlers()

    // CREATE A FISH EVERYTHING SECOND






    //constructor end
  }


  // ADDS A NEW FISH
  addFish(){
    let newFish = this.randomize(new OtherFish(Game.OTHERFISH))
    this.allFish.push(newFish)
    // console.log("add fish")
    // addFish end
  }

  // DRAWS EVERYTHING
  drawGame(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.catFish.update(this.catFish.vel, ctx);

    this.allFish.forEach((fish, idx) =>{
      if (fish.pos[0] < -fish.width || fish.pos[0] > 700) {
        this.allFish.splice(idx, 1)
      }

      if (fish.isCollidedWith(this.catFish)) {
        if (fish.height < this.catFish.height) {
          // plays a random sound
          this.wow[this.randomInt(this.wow.length)].play()
          this.catFish.height += 5;
          this.catFish.width += 5;
          this.allFish.splice(idx, 1);
        } else if (fish.height > this.catFish.height) {
          // window.alert("Game over!")
          this.meow.play()
          this.gameOver();
          alert("You lost! Refresh the page to play again.")
        }
      }


      // draws each fish
      this.allFish[idx].update(1, ctx)


    })
    this.allFish[this.allFish.length-1].update(0, ctx)
    this.wrap(this.catFish)
    if(this.catFish.height > 350){
      alert("Victory! You've become more powerful than anyone could imagine. Refresh page to replay.")
      this.gameOver();
    }

    // console.log(this.catFish.vel)
    // drawGame end
  }

  // GIVES FISH A RANDOM POSITION
  randomize(fish){
    let random_y = Math.random() * (Game.DIM_Y - fish.rad);
    let num = Math.random();

    // for squares
    fish.height = this.catFish.height * 0.3 + (this.catFish.height * .8 * num)
    fish.width = this.catFish.width * 0.3 + (this.catFish.width * .8 * num)

    // for circles
    fish.radius = fish.radius * 0.25 + (fish.radius * 0.75 * num)

    switch (Math.round(Math.random())) {

      case 0:
      //left
        fish.pos = [0 - fish.radius, random_y];
        fish.vel = Math.abs(fish.vel);
        fish.fish_pic.src = "assets/BulletCatFaceRight.png"
        return fish;

      case 1:
      //right
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
      fish.pos[1] = -fish.height/2
    }
  }

  gameOver(){
    this.lost = true
  }

  randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  momentum(fish){
    if (fish.vel[0] !== 0 && fish.vel[0] > 0) {
      fish.vel[0] -= 0.5
    } else if (fish.vel[0] !== 0 && fish.vel[0] < 0) {
      fish.vel[0] += 0.5
    } else if (fish.vel[1] !== 0 && fish.vel[1] < 0) {
      fish.vel[1] += 0.5
    } else if (fish.vel[1] !== 0 && fish.vel[1] > 0) {
      fish.vel[1] -= 0.5
    } // else {
    //   this.purr.play()
    // }
    // console.log("momentum")

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

Game.WOW1 = new Audio("assets/WowMeow.mov");
Game.WOW1.volume = 0.40;

Game.WOW2 = new Audio("assets/WowMeow2.mov");
Game.WOW2.volume = 0.40;

Game.WOW3 = new Audio("assets/WowMeow3.mov");
Game.WOW3.volume = 0.40;

Game.MEOW = new Audio("assets/OneSecMeow.mov");
Game.MEOW.volume = 0.35;

Game.PURR = new Audio("assets/Purr.mov");
Game.PURR.volume = 0.35;



export default Game;
