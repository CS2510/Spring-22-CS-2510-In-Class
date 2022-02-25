import Component from "../engine/Component.js"
import Circle from "../engine/Circle.js"

class BallUpdateComponent extends Component{
  constructor(parent){
    super(parent);
  }
  update(){
    let circle = this.parent.getComponent(Circle);
    circle.x += .2;
    circle.y += .2;
  }
}

export default BallUpdateComponent;