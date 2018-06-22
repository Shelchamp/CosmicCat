import MovingObject from './moving_object'

class CatFish extends MovingObject {
  constructor(props){
    super(props)
    this.color = "rgba(193, 176, 23, 0)";
    this.pos = [350, 200]
    this.vel = [0,0];
    this.height = 50
    this.width = 50
    this.radius = 25;

    let fish_pic = new Image();
    fish_pic.src="assets/InBreadCat.png"
    this.fish_pic = fish_pic
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos[0],
      this.pos[1],
      this.width,
      this.height
    )

  }

  update(vel, ctx){
    this.pos[0] += vel[0]
    this.pos[1] += vel[1]
    this.draw(ctx)
    //drawImage(image, x, y, width, height)
    ctx.drawImage(this.fish_pic, this.pos[0]-3, this.pos[1]-5, this.width+10, this.height+10)
  }

  swim(move){


    if (this.vel[0] === CatFish.MAX_V_NEG){
      this.vel[0] = CatFish.MAX_V_NEG + .25
    } else if (this.vel[0] === CatFish.MAX_V_POS) {
      this.vel[0] = CatFish.MAX_V_POS - 0.25
    }else {
      this.vel[0] += move[0];
    }

    if (this.vel[1] === CatFish.MAX_V_NEG){
      this.vel[1] = CatFish.MAX_V_NEG + .25
    } else if (this.vel[1] === CatFish.MAX_V_POS) {
      this.vel[1] = CatFish.MAX_V_POS - 0.25
    }{
      this.vel[1] += move[1];

    }

    // changes cat facing direction based on whether
    // pos[0] is being added or subtracted from
    if(move[0] < 0){
      this.fish_pic.src="assets/InBreadCatFaceLeft.png"
    } else if (move[0] > 0){
      this.fish_pic.src="assets/InBreadCat.png"
    }
  }

  bindKeyHandlers(){

    Object.keys(CatFish.MOVES).forEach((k) =>{
      const move = CatFish.MOVES[k];
      key(k, () => {this.swim(move); })
    })

  }





}

CatFish.MOVES = {
  'w': [0, -0.25],
  'a': [-0.25, 0],
  's': [0, 0.25],
  'd': [0.25, 0],

  'up': [0, -0.25],
  'left': [-0.25, 0],
  'down': [0, 0.25],
  'right': [0.25, 0]
}

CatFish.MAX_V_POS = 5;
CatFish.MAX_V_NEG = -5;



export default CatFish;
