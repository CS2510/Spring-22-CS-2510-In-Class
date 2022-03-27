import Component from "../engine/Component.js"
import Circle from "../engine/Circle.js"

class BallUpdateComponent extends Component{
  constructor(parent){
    super(parent);
    this.vx = 1;
    this.vy = 1;
  }
  update(){
    let circle = this.parent.getComponent(Circle);
    circle.x += .2 * this.vx;
    circle.y += .2 * this.vy;
    if(circle.x > 100 || circle.x < 0)
      this.vx *=-1;
    if(circle.y > 100 || circle.y < 0){
      this.vy *= -1;
    }
  }
}

export default BallUpdateComponent;