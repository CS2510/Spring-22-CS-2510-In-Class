import Scene from "../engine/Scene.js"
import NorthernTextGameObject from "./NorthernTextGameObject.js"
import GoSouthGameObject from "./GoSouthGameObject.js"
import StatusGameObject from "./StatusGameObject.js";


class NorthernScene extends Scene {
  constructor() {
    super("NorthernScene", "white");
  }

  start(){

    //Add the text
    this.gameObjects.push(new NorthernTextGameObject(100, 100));

    //Add the button
    this.gameObjects.push(new GoSouthGameObject(100, 200, 20))

    this.gameObjects.push(new StatusGameObject(50, 50));
  }
}

export default NorthernScene;
