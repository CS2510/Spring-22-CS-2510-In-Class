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
import GameObjectList from "./GameObjectList.js";

class MainScene extends Scene {
  constructor() {
    super("Collision Test");
  }


  start() {
    this.fillColor = "black"

    for (let gameObject of GameObjectList) {
      this.gameObjects.push(gameObject);
    }

    let player = new PrefabCircle("Player", 0, 0, 25);
    player.layer = 0;
    this.gameObjects.push(player);

    let badRectangle = new PrefabRectangle("BadRectangle", -200, -200, 20, 20)
    badRectangle.getComponent("RectangleDraw").fillStyle = "darkred";
    badRectangle.layer = -1;
    this.gameObjects.push(badRectangle);

    this.gameObjects.push(new PrefabEmpty("ControllerGameObject").addComponent(new ControllerComponent()));



  }
}

export default MainScene;
