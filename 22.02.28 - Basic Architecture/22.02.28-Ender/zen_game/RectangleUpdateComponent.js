import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {ease} from "../engine/scripts.js"
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
    let rectangleDraw = this.parent.getComponent("RectangleDraw");

    rectangleDraw.fillStyle = "blue"
    
    if (Input.getMouseButton(0) > 0)
      rectangleDraw.fillStyle = "purple"

    
    
    let h = (1 - (this.percent) * Constants.height);

    let percentSquared = this.percent * this.percent;


    let y = Constants.startY - 50 - h / 2 + ease(Time.timePassed) * 50 * percentSquared;
    //rectangle.y = y;
    //rectangle.h = h;
  }
}

export default RectangleUpdateComponent;