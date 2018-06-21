import MovingObject from './moving_object'

class CatFish extends MovingObject {
  constructor(props){
    super(props)
    this.color = "rgb(193, 176, 23)";
    this.pos = [0, 0]
    this.vel = [0,0];
    this.height = 25
    this.width = 25
    this.radius = 25;
  }

  update(vel, ctx){
    this.pos[0] += vel[0]
    this.pos[1] += vel[1]
    this.draw(ctx)
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
