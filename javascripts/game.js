import MovingObject from "./moving_object";
import OtherFish from "./other_fish";
import CatFish from "./cat_fish";

class Game {
  constructor() {
    this.allFish = [];
    this.catFish = new CatFish(Game.CATFISH);
    this.wow = [Game.WOW1, Game.WOW2, Game.WOW3];
    this.meow = Game.MEOW;
    this.purr = Game.PURR;
    this.waves = null;
    this.moment = null;

    // NEED TO DETERMINE A WIN VS LOSE
    this.won = false;
    this.over = false;
    this.started = false;

    // CREATES FIRST BATCH OF FISH
    for (let i = 0; i < Game.NUM_FISH; i++) {
      this.addFish();
    }

    this.catFish.bindKeyHandlers();

    // CREATE A FISH EVERYTHING SECOND

    //constructor end
  }

  reset() {
    this.over = false;
    this.won = false;
    this.allFish = [];
    this.catFish = new CatFish(Game.CATFISH);
    this.wow = [Game.WOW1, Game.WOW2, Game.WOW3];
    this.meow = Game.MEOW;
    this.purr = Game.PURR;
    this.waves = null;
    this.moment = null;
    this.started = false;

    for (let i = 0; i < Game.NUM_FISH; i++) {
      this.addFish();
    }

    this.catFish.bindKeyHandlers();
  }

  // ADDS A NEW FISH
  addFish() {
    let newFish = this.randomize(new OtherFish(Game.OTHERFISH));
    this.allFish.push(newFish);
    // console.log("add fish")
    // addFish end
  }

  // DRAWS EVERYTHING
  drawGame(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.catFish.update(this.catFish.vel, ctx);

    this.allFish.forEach((fish, idx) => {
      if (fish.pos[0] < -fish.width || fish.pos[0] > Game.DIM_X) {
        this.allFish.splice(idx, 1);
      }

      // This line deals with collisions
      if (fish.isCollidedWith(this.catFish)) {
        // If the enemy is smaller

        if (fish.height < this.catFish.height) {
          // Plays a random sound
          this.wow[this.randomInt(this.wow.length)].play();
          // Increase size of cat
          this.catFish.height += 5;
          this.catFish.width += 5;
          this.allFish.splice(idx, 1);

          // If enemy is larger
        } else if (fish.height > this.catFish.height) {
          // Gameover sound
          this.meow.play();

          //Gameover logic
          this.gameWon(false);
          // alert("You lost!");
        }
      }

      // draws each fish
      this.allFish[idx].update(1, ctx);
    });
    this.allFish[this.allFish.length - 1].update(0, ctx);
    this.wrap(this.catFish);

    // This logic deals with winning
    if (this.catFish.height > 275) {
      // If the player reaches a certain size
      this.gameWon(true);
      // alert(
      //   "Victory! You've become more powerful than anyone could imagine. An absolute unit."
      // );
    }

    // drawGame end
  }

  // GIVES FISH A RANDOM POSITION
  randomize(fish) {
    let random_y = Math.random() * (Game.DIM_Y - fish.rad);
    let num = Math.random();

    // for squares - 0.31 is working. 0.8 for testing
    fish.height = this.catFish.height * 0.31 + this.catFish.height * 0.8 * num;
    fish.width = this.catFish.width * 0.31 + this.catFish.width * 0.8 * num;

    // for circles
    fish.radius = fish.radius * 0.25 + fish.radius * 0.75 * num;

    switch (Math.round(Math.random())) {
      case 0:
        //left
        fish.pos = [0 - fish.width, random_y];
        fish.vel = Math.abs(fish.vel);
        fish.fish_pic.src = "assets/BulletCatFaceRight.png";
        return fish;

      case 1:
        //right
        fish.pos = [Game.DIM_X, random_y];
        fish.vel = -fish.vel;
        return fish;

      default:
        fish.pos = [Game.DIM_X - fish.width + 1, random_y];
        fish.vel = -fish.vel;
        return fish;
    }

    // randomize end
  }

  wrap(fish) {
    if (fish.pos[0] < -fish.width) {
      fish.pos[0] = Game.DIM_X;
    } else if (fish.pos[0] > Game.DIM_X - 1) {
      fish.pos[0] = -fish.width;
    } else if (fish.pos[1] < -fish.height) {
      fish.pos[1] = Game.DIM_Y;
    } else if (fish.pos[1] > Game.DIM_Y) {
      fish.pos[1] = -fish.height;
    }
  }

  gameWon(won) {
    this.over = true;
    this.started = false;
    this.won = won;
    this.gameOver();
  }

  gameOver() {
    const gameOver = document.createElement("div");
    gameOver.classList.add("gameover");
    gameOver.classList.add("fade-in");
    const timeCon = document.getElementsByClassName("timer-container")[0];
    timeCon.appendChild(gameOver);
    if (this.won) {
      // IF WON
      gameOver.classList.add("win-cat");
      // gameOver.classList.remove("win-cat");
      const gameOverText = document.createElement("h1");
      gameOverText.classList.add("gamewinner-text");
      gameOver.appendChild(gameOverText);
      window.setTimeout(() => {
        gameOverText.innerHTML = "You win! Press SPACE to play again";
      }, 2500);
    } else {
      // IF LOST
      gameOver.classList.add("lose-cat");
      window.setTimeout(() => {
        gameOver.classList.remove("lose-cat");
        gameOver.classList.add("lose-cat-still");
        const gameOverText = document.createElement("h1");
        gameOverText.innerHTML = "Game Over! Hit SPACE to play again";
        gameOverText.classList.add("gameover-text");
        gameOver.appendChild(gameOverText);
      }, 6300);
    }

    // console.log(timeCon.childNodes.length);
  }

  randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  momentum(fish) {
    if (fish.vel[0] !== 0 && fish.vel[0] > 0) {
      fish.vel[0] -= 0.5;
    } else if (fish.vel[0] !== 0 && fish.vel[0] < 0) {
      fish.vel[0] += 0.5;
    } else if (fish.vel[1] !== 0 && fish.vel[1] < 0) {
      fish.vel[1] += 0.5;
    } else if (fish.vel[1] !== 0 && fish.vel[1] > 0) {
      fish.vel[1] -= 0.5;
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
};

Game.OTHERFISH = {
  pos: [400, 400],
  vel: 1,
  rad: 25,
  height: 50,
  width: 50
};

Game.WOW1 = new Audio("assets/WowMeow.mov");
Game.WOW1.volume = 0.4;

Game.WOW2 = new Audio("assets/WowMeow2.mov");
Game.WOW2.volume = 0.4;

Game.WOW3 = new Audio("assets/WowMeow3.mov");
Game.WOW3.volume = 0.4;

Game.MEOW = new Audio("assets/OneSecMeow.mov");
Game.MEOW.volume = 0.35;

Game.PURR = new Audio("assets/Purr.mov");
Game.PURR.volume = 0.35;

export default Game;
