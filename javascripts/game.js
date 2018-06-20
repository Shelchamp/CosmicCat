class Game {
  constructor(){
    this.allFish = []
  }

  addFish(fish){
    this.allFish.push(this.randomPositon(fish))
  }

  randomPositon(fish){
    let random_y = Math.random() * Game.DIM_Y;

    switch (Math.round(Math.random())) {

      case 0:
        fish.pos = [0, random_y];
        fish.vel = Math.abs(fish.vel);
        return fish;

      case 1:
        fish.pos = [Game.DIM_X, random_y];
        fish.vel = -fish.vel;
        return fish;

      default:
        fish.pos = [Game.DIM_X, random_y];
        fish.vel = -fish.vel;
        return fish;
    }
  }

}

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS;


export default Game;
