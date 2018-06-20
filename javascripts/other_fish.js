import MovingObject from './moving_object'

class OtherFish extends MovingObject {
  constructor(props){
    super(props)
    let num = Math.random();
    this.color = "rgb(198, 85, 60)";
    this.radius = 10;
    this.height = 40
    this.width = 40
    this.vel = 1;
  }

  update(vel, ctx){
    if (this.vel < 0) {
      vel = -vel
    }
    this.pos[0] += vel
    this.draw(ctx)
  }
}

OtherFish.RND_DM = Math.random()




export default OtherFish;
