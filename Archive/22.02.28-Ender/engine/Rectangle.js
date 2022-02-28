import Component from "./Component.js"
class Rectangle extends Component{
  constructor(parent, x, y, w, h){
    super(parent)
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 100;
    this.h = h || 100;
  }
}

export default Rectangle;