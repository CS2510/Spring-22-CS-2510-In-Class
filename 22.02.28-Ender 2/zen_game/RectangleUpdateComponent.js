import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import { ease } from "../engine/scripts.js"
import Time from "../engine/Time.js"
import Input from "../engine/Input.js"

let startY = Constants.startY;



class RectangleUpdateComponent extends Component {
  constructor(parent, percent) {
    super(parent);

    this.percent = percent;

  }
  update() {
    let rectangle = this.parent.getComponent("Rectangle");
    let rectangleDraw = this.parent.getComponent("RectangleDraw")
    let b = 0;

    if (Input.getMouseButton(0) > 0)
      b = 255;

    rectangleDraw.b = b;
    
    let y = startY - 50 - rectangle.h / 2 + ease(Time.timePassed) * 50 * percentSquared;
    rectangle.y = y;

  }
}

export default RectangleUpdateComponent;