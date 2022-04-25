import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import ElevatorController from "./ElevatorController.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"

class ElevatorScene extends Scene {
  static floors = 26;
  static floorSize = 69 * 20;
  constructor() {
    super();
  }
  start() {


    this.gameObjects.push(new PrefabTextSmall("Title", 10, 20, "Elevator Scene"))
    this.gameObjects.push(new PrefabTextSmall("FloorIndicator", 10, 40, ""))
    this.gameObjects.push(new PrefabTextSmall("AltitudeIndicator", 10, 60, ""))
    this.gameObjects.push(new PrefabTextSmall("PushSpace.", 10, 80, "Push space to exit onto this floor."))

    this.gameObjects.push(new PrefabCircle("Player", 0, 0, 5));

    for (let j = 0; j < ElevatorScene.floors; j++) {
      this.gameObjects.push(new PrefabRectangle("Floor", 10, -j * (ElevatorScene.floorSize + 10), ElevatorScene.floorSize, ElevatorScene.floorSize));

    }


    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ElevatorController()));
  }
}

export default ElevatorScene;