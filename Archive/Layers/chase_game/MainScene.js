import Scene from "../engine/Scene.js"
import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";
import PrefabTextLarge from "../engine/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/PrefabTextSmall.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import ControllerComponent from "./ControllerComponent.js"

import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";

class MainScene extends Scene {
  constructor() {
    super("Collision Test");
  }

  start() {
    this.fillColor = "black"

    this.gameObjects.push(new PrefabEmpty("ControllerGameObject").addComponent(new ControllerComponent()));

  
    let pauseInstructions = new PrefabTextSmall("PauseInstructions", 50, 50, "Push (p) to pause.")
    pauseInstructions.layer = 2
    this.gameObjects.push(pauseInstructions);

    let ticks = new PrefabTextSmall("Ticks", 50, 100, "0")
    ticks.layer = 1;
    this.gameObjects.push(ticks);

    let player = new PrefabCircle("Player", 200, 200, 25);
    player.layer = 0;
    this.gameObjects.push(player);


    let badRectangle = new PrefabRectangle("BadRectangle", 20, 20, 20, 20)
    badRectangle.getComponent("RectangleDraw").fillStyle = "pink";
    badRectangle.layer = -1;
    this.gameObjects.push(badRectangle);
  }
}

export default MainScene;
