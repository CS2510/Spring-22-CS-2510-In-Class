import GameObject from "../engine/GameObject.js"
import ScoreUpdateComponent from "./ScoreUpdateComponent.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class ScoreGameObject extends GameObject{
  constructor(x,y){
    super("Score");
    this.components.push(new Text(this, x,y, "", "20px sans"));
    this.components.push(new TextDraw(this, "white", "transparent"));
    this.components.push(new ScoreUpdateComponent(this));
    
  }
  
}

export default ScoreGameObject;
