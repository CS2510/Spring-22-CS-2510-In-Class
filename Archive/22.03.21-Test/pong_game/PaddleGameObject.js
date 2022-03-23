import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js"
import RectangleDraw from "../engine/RectangleDraw.js"
import PaddleUpdateComponent from "./PaddleUpdateComponent.js"
import Game from "../engine/Game.js"

class PaddleGameObject extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, "orange", "transparent"));
    this.components.push(new PaddleUpdateComponent(this));

    
  }
}

export default PaddleGameObject;