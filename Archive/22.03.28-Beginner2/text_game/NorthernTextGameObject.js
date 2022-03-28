import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class NorthernTextGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"You are at the north. You can go south.", "50px sans"))
    this.components.push(new TextDraw(this, "black", "transparent"))
  }
}

export default NorthernTextGameObject;