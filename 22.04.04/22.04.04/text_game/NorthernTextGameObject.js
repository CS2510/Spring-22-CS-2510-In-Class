import Game from "../engine/Game.js";
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
    let text = "You are at the north. You can go south.";
    if(Game?.persist?.score)
      text += " Score: " + Game.persist.score;
    this.components.push(new Text(this, this.x,this.y,text, "50px sans"))
    this.components.push(new TextDraw(this, "black", "transparent"))
  }
}

export default NorthernTextGameObject;