import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import GoSouthUpdateComponent from "./GoSouthUpdateComponent.js"

class GoSouthGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Rectangle(this, this.x, this.y-50, 300, 100));
    this.components.push(new RectangleDraw(this, "blue", "orange"));
    this.components.push(new Text(this, this.x,this.y,"Go South", "50px sans"))
    this.components.push(new TextDraw(this, "white", "transparent"))
    this.components.push(new GoSouthUpdateComponent(this))
  }
}

export default GoSouthGameObject;