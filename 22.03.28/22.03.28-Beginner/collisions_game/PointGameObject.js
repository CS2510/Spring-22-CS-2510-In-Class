import GameObject from "../engine/GameObject.js"
import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";

class PointGameObject extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Point(this, x,y));
    this.components.push(new PointDraw(this, "white", "transparent"));
    
  }
}

export default PointGameObject;