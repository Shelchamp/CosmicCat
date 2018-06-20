
class MovingObject {
  constructor(props){
    // this.pos = props.x;
    // this.y = props.y;
    // this.xv = props.xv;
    // this.yv = props.yv;
    this.pos = props.pos;
    this.vel = props.vel;
    this.rad = props.rad;
    this.height = props.height;
    this.width = props.width;
    this.color = "rgb(122, 71, 180)"


    // this.update = () =>{
    //   let c = game.context;
    //   c.fillStyle = 'green';
    //   c.fillRect(this.x, this.y, this.width, this.height);
    // }
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos[0],
      this.pos[1],
      this.height,
      this.width
    )
  }

  move(){
    this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])]
  }

  isCollidedWith(otherFish){
    if(this.pos[0] < otherFish.pos[0] + otherFish.width &&
    this.pos[0] + this.width > otherFish.pos[0] &&
    this.pos[1] < otherFish.pos[1] + otherFish.height &&
    this.height + this.pos[1] > otherFish.pos[1]){
      return true
    } else {
      return false 
    }
  }



}



export default MovingObject;
