import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class SouthernTextGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"You are at the south. You can go north.", "50px sans"))
    this.components.push(new TextDraw(this, "black", "transparent"))
  }
}

export default SouthernTextGameObject;