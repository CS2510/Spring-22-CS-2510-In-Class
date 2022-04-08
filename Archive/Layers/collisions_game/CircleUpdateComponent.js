import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"

class CircleUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
   

  }
  update() {
    let point = this.parent.getComponent("Circle");
    let {x, y} = Input.getMousePosition();
    point.x = x;
    point.y = y;


    
  }
}

export default CircleUpdateComponent;
