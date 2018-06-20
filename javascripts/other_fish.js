import MovingObject from './moving_object'

class OtherFish extends MovingObject {
  constructor(props){
    super(props)
    this.color = "rgb(198, 85, 60)";
    this.radius = 10;
    this.height = 25;
    this.width = 25;
    this.vel = 10;
  }

  update(vel, ctx){
    this.pos[0] += vel
  }
}




export default OtherFish;
