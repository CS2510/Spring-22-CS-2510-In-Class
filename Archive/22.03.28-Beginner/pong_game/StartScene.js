import Scene from "../engine/Scene.js"
import TextPrefab from "../engine/TextPrefab.js"
import StartUpdateComponent from "./StartUpdateComponent.js";

class StartScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new TextPrefab("Welcome", 50,50,"Welcome", "50px sans", "orange", "blue", [new StartUpdateComponent()]));
    
  }
}

export default StartScene;