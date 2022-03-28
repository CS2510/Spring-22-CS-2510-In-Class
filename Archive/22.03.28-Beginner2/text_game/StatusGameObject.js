import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import StatusUpdateComponent from "./StatusUpdateComponent.js"

class StatusGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"Start", "20px sans"))
    this.components.push(new TextDraw(this, "black", "transparent"))
    this.components.push(new StatusUpdateComponent(this))
  }
}

export default StatusGameObject;