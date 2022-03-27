import Scene from "../engine/Scene.js"
import TextPrefab from "../engine/TextPrefab.js"
import GoSouthGameObject from "./GoSouthGameObject.js"


class NorthernScene extends Scene {
  constructor() {
    super("NorthernScene", "white");
  }

  start(){

    //Add the text
    this.gameObjects.push(new TextPrefab("NorthText", 100, 100,"You are at the north. You can go south.", "50px sans", "black", "transparent"));

    //Add the button
    this.gameObjects.push(new GoSouthGameObject(100, 200, 20))
  }
}

export default NorthernScene;
