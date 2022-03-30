import GameObject from "./GameObject.js"
import Text from "./Rectangle.js";
import TexDraw from "./RectangleDraw.js";

class PrefabTextSmall extends GameObject{
  constructor(name, x, y, text){
    super(name);
    this.x = x;
    this.y = y;
    this.text = text;
    this.font = "20px arial";

    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,this.text, this.font));
    this.components.push(new RectangleDraw(this, "white", "black"));
  }
}

export default PrefabTextSmall;