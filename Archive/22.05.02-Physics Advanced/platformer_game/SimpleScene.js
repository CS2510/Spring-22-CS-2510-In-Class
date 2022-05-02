import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import SimpleController from "./SimpleController.js"
import SceneController from "./SceneController.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"

import PrefabBrick from "./PrefabBrickSimple.js"

class MainScene extends Scene{
  constructor(){
    super();
  }
  start(){

  
    this.gameObjects.push(new PrefabTextSmall("PlatformerTitle", 10, 20, "Simple Platformer Game"))
    // this.gameObjects.push(new PrefabTextSmall("PushSpace", 10, 40, "Push space to exert an upward force."))
    this.gameObjects.push(new PrefabTextSmall("PositionTextY", 10, 60, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextY", 10, 80, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextY", 10, 100, ""))

    this.gameObjects.push(new PrefabTextSmall("PositionTextX", 10, 140, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextX", 10, 160, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextX", 10, 180, ""))


    this.gameObjects.push(new PrefabRectangle("Player", 0, 0, 10, 10));

    this.gameObjects.push(new PrefabBrick("PrefabBrick", -20, 20, 40, 10));
    this.gameObjects.push(new PrefabBrick("PrefabBrick", 20, 10, 40, 10));
    this.gameObjects.push(new PrefabBrick("PrefabBrick", -40, -20, 40, 10));

    // this.gameObjects.push(new PrefabGround("PrefabGround", 20, 30, 40, 10));
    // this.gameObjects.push(new PrefabGround("PrefabGround", 60, 20, 40, 10));
    // this.gameObjects.push(new PrefabGround("PrefabGround", 60, -10, 40, 10));
    



    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new SimpleController()));
    this.gameObjects.push(new PrefabEmpty("SceneController").addComponent(new SceneController()));
  }
}

export default MainScene;