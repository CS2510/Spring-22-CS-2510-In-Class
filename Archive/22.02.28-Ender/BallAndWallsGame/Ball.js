import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import GameObject from "../engine/GameObject.js"
import BallUpdateComponent from "./BallUpdateComponent.js";

class Ball extends GameObject{
  constructor(){
    super();
    this.components.push(new Circle(this, 50,50,10))
    this.components.push(new CircleDraw(this))
    this.components.push(new BallUpdateComponent(this));
  }
}

export default Ball;