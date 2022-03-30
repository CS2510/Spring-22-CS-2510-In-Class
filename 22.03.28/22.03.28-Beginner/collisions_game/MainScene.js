import Scene from "../engine/Scene.js"
import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";
import PrefabTextLarge from "../engine/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/PrefabTextSmall.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import Controller from "./Controller.js"

import CollisionPointGameObject from "./CollisionPointGameObject.js";

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start(){

    this.gameObjects.push(new PrefabCircle("Circle", 150,150, 50));
    this.gameObjects.push(new PrefabRectangle("Rectangle", 250,250, 50, 25));
    this.gameObjects.push(new PrefabLine("CircleDebugLine", 0,0, 50, 25));
    this.gameObjects.push(new PrefabTextLarge("LargeText", 20, 50, "Collision Game"));
    this.gameObjects.push(new PrefabTextSmall("SmallText", 20, 450, "Move the mouse to test collisions."));

    this.gameObjects.push(new CollisionPointGameObject(0,0));

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new Controller()));
    
  }
}

export default MainScene;
