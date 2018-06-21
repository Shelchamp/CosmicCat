import MovingObject from './moving_object'

class CatFish extends MovingObject {
  constructor(props){
    super(props)
    this.color = "rgba(193, 176, 23, 0.01)";
    this.pos = [0, 0]
    this.vel = [0,0];
    this.height = 50
    this.width = 50
    this.radius = 25;

    let fish_pic = new Image();
    fish_pic.src="https://i.imgur.com/yIudEdm.png?1"
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
    this.vel[0] += move[0];
    this.vel[1] += move[1];
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




export default CatFish;
