import Scene from "../engine/Scene.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js";
import Constants from "./Constants.js"
import StartGameObject from "./StartGameObject.js";
import StartUpdateComponent from "./StartUpdateComponent.js";

class StartScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new StartGameObject(50,50));
    
  }
}

export default StartScene;