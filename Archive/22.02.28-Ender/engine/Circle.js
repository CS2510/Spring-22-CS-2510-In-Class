import Component from "./Component.js"
class Circle extends Component{
  constructor(parent, x, y, r){
    super(parent)
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 50;
  }
}

export default Circle;