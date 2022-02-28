import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js"
import RectangleDraw from "../engine/RectangleDraw.js"

class Wall extends GameObject{
  constructor(x,y,w,h){
    super();
    let rectangle = new Rectangle(this, x, y, w, h);
    let rectangleDraw = new RectangleDraw(this, "rgb(255,0,0)", "rgb(0,255,0)")
    this.components.push(rectangle);
    this.components.push(rectangleDraw);
  }
}

export default Wall;