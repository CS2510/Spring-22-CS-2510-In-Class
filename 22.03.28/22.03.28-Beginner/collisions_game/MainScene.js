import Scene from "../engine/Scene.js"
import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";

import CollisionPointGameObject from "./CollisionPointGameObject.js";

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start(){

    this.gameObjects.push(new PrefabCircle("Circle", 150,150, 50));
    this.gameObjects.push(new PrefabRectangle("Rectangle", 250,250, 50, 25));
    this.gameObjects.push(new PrefabLine("Line", 0,0, 50, 25));

    this.gameObjects.push(new CollisionPointGameObject(0,0));
    
  }
}

export default MainScene;
