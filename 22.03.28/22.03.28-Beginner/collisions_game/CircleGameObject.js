import GameObject from "../engine/GameObject.js"
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";

class CircleGameObject extends GameObject{
  constructor(x,y,r){
    super();
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, "white", "transparent"));
    
  }
}

export default CircleGameObject;