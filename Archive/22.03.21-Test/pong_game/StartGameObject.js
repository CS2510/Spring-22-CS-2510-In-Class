import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import StartUpdateComponent from "./StartUpdateComponent.js"

class StartGameObject extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Text(this, 100,100, "Welcome", "40px sans"));
    this.components.push(new TextDraw(this, "white", "transparent"));
    this.components.push(new StartUpdateComponent(this));
  }
}

export default StartGameObject;