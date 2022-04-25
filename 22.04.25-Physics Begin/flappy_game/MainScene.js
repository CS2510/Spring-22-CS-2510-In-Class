import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import Scene from "../engine/Scene.js"

import ControllerComponent from "./ControllerComponent.js"

class MainScene extends Scene{
  constructor(){
    super();
  }
  start(){

  
    this.gameObjects.push(new PrefabTextSmall("FlappyCircle", 10, 20, "Flappy Circle Game"))
    this.gameObjects.push(new PrefabTextSmall("PushSpace", 10, 60, "Push space to exert an upward force."))
    this.gameObjects.push(new PrefabTextSmall("PositionText", 10, 100, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityText", 10, 140, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationText", 10, 180, ""))


    this.gameObjects.push(new PrefabCircle("Flappy", 0, 0, 10));

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ControllerComponent()));
  }
}

export default MainScene;