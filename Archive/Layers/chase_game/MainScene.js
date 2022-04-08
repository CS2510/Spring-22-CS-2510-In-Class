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

    this.gameObjects.push(new PrefabEmpty("ControllerGameObject").addComponent(new ControllerComponent()));

    this.gameObjects.push(new PrefabTextSmall("PauseInstructions", 50, 50, "Push (p) to pause."));

    this.gameObjects.push(new PrefabTextSmall("Ticks", 50, 100, "0"));

    this.gameObjects.push(new PrefabCircle("Player", 200, 200, 25));

    let badRectangle = new PrefabRectangle("BadRectangle", 20, 20, 20, 20)
    badRectangle.getComponent("RectangleDraw").fillStyle = "red";
    this.gameObjects.push(badRectangle);
  }
}

export default MainScene;
