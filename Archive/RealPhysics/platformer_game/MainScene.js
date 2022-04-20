import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import ControllerComponent from "./ControllerComponent.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"

import PrefabGround from "./PrefabGround.js"

class MainScene extends Scene{
  constructor(){
    super();
  }
  start(){

  
    this.gameObjects.push(new PrefabTextSmall("PlatformerTitle", 10, 20, "Simple Platformer Game"))
    // this.gameObjects.push(new PrefabTextSmall("PushSpace", 10, 40, "Push space to exert an upward force."))
    this.gameObjects.push(new PrefabTextSmall("PositionText", 10, 60, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityText", 10, 80, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationText", 10, 100, ""))


    this.gameObjects.push(new PrefabRectangle("Player", 0, 0, 10, 10));

    this.gameObjects.push(new PrefabGround("PrefabGround", -20, 20, 40, 10));

    this.gameObjects.push(new PrefabGround("PrefabGround", 20, 30, 40, 10));
    this.gameObjects.push(new PrefabGround("PrefabGround", 60, 20, 40, 10));
    this.gameObjects.push(new PrefabGround("PrefabGround", 60, -10, 40, 10));
    



    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ControllerComponent()));
  }
}

export default MainScene;