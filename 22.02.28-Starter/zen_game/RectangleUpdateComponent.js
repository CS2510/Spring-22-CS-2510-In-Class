import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {ease} from "../engine/scripts.js"
import Time from "../engine/Time.js"
import Input from "../engine/Input.js"

let startY = Constants.startY;



class RectangleUpdateComponent extends Component {
  constructor(parent, x, y, w, h, r, g, b, percent) {
    super(parent);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.percent = percent;
    //this.mouseDown = false
  }
  update() {
    this.b = 0; 
    
    if (Input.getMouseButton(0) > 0)
      this.b = 255;

    
    
    let h = (1 - (this.percent) * Constants.height);

    let percentSquared = this.percent * this.percent;


    this.y = startY - 50 - this.h / 2 + ease(Time.timePassed) * 50 * percentSquared;
    
  }
  mouseEvent(){
    //console.log("Mouse Event")
    //this.mouseDown = !this.mouseDown
  }
}

export default RectangleUpdateComponent;