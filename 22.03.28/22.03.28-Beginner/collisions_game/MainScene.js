import Scene from "../engine/Scene.js"
import CircleGameObject from "./CircleGameObject.js";

import PointGameObject from "./PointGameObject.js";
import AARGameObject from "./AARGameObject.js";
import CollisionPointGameObject from "./CollisionPointGameObject.js";

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start(){

    this.gameObjects.push(new PointGameObject(50,50));
    this.gameObjects.push(new CircleGameObject(150,150, 50));
    this.gameObjects.push(new AARGameObject(250,250, 50, 25));

    this.gameObjects.push(new CollisionPointGameObject(0,0));
    
  }
}

export default MainScene;
