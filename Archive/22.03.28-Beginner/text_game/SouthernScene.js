import Scene from "../engine/Scene.js"
import TextPrefab from "../engine/TextPrefab.js"
import GoNorthGameObject from "./GoNorthGameObject.js"


class SouthernScene extends Scene {
  constructor() {
    super("SouthernScene", "white");
  }

  start(){
    //Add the button
    this.gameObjects.push(new GoNorthGameObject(100, 200, 20))

    //Add the text
    this.gameObjects.push(new TextPrefab("SouthText", 100, 100,"You are at the south. You can go north.", "50px sans", "black", "transparent"));

  }
}

export default SouthernScene;
