import MovingObject from './moving_object'

class CatFish extends MovingObject {
  constructor(props){
    super(props)
    this.color = "rgb(193, 176, 23)";
    this.pos = [300, 150]
    this.vel = [0,0];
    this.radius = 25;
    this.height = 25
    this.width = 25
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
    // const cat_fish = this;

    Object.keys(CatFish.MOVES).forEach((k) =>{
      const move = CatFish.MOVES[k];
      key(k, () => {this.swim(move); })
    })

    console.log('bound')
    console.log(this)


  }




}

CatFish.MOVES = {
  'w': [0, -0.5],
  'a': [-0.5, 0],
  's': [0, 0.5],
  'd': [0.5, 0]
}




export default CatFish;
