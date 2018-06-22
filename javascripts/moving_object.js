
class MovingObject {
  constructor(props){
    this.pos = props.pos;
    this.vel = props.vel;
    this.rad = props.rad;
    this.height = props.height;
    this.width = props.width;
    this.color = "rgb(122, 71, 180)"



    // fish_pic.addEventListener("load",
    //   ()=>c.drawImage(fish_pic, 0 ,0),
    //   false);
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos[0],
      this.pos[1],
      this.width,
      this.height
    )
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false)
    // // ctx.stroke();
    // ctx.fill();

    // ctx.drawImage(this.fish_pic, 0, 0)
  }

  move(){
    this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])]
  }

  isCollidedWith(otherFish){
    // square collision
    if(this.pos[0] < otherFish.pos[0] + otherFish.width &&
    this.pos[0] + this.width > otherFish.pos[0] &&
    this.pos[1] < otherFish.pos[1] + otherFish.height &&
    this.height + this.pos[1] > otherFish.pos[1]){
      return true
    } else {
      return false
    }
  }

  // bindKeyHandlers(){
  //   const fish = this;
  //
  // }



}



export default MovingObject;
