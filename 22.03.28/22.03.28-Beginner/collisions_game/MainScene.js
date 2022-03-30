import Scene from "../engine/Scene.js"
import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";
import PrefabTextLarge from "../engine/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/PrefabTextSmall.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import Controller from "./Controller.js"

import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";

import PointUpdateComponent from "./PointUpdateComponent.js";
import CircleUpdateComponent from "./CircleUpdateComponent.js";
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start() {

    this.gameObjects.push(new PrefabCircle("BiggerCircle", 150, 150, 50+10));
    this.gameObjects.push(new PrefabCircle("Circle", 150, 150, 50));
    this.gameObjects.push(new PrefabRectangle("Rectangle", 250, 250, 50, 25));
    this.gameObjects.push(new PrefabLine("CircleDebugLine", 0, 0, 50, 25));

    //Add the mouse-controlled point
    this.gameObjects.push(
      new PrefabEmpty("DynamicPoint")
        .addComponent(new Point())
        .addComponent(new PointDraw(null, "transparent", "magenta"))
        .addComponent(new PointUpdateComponent()));

    //Add the mouse-controlled Circle
    this.gameObjects.push(
      new PrefabCircle("DynamicCircle", 0, 0, 10)
        .addComponent(new CircleUpdateComponent()));

    //Add the mouse-controlled Rectangle
    this.gameObjects.push(
      new PrefabRectangle("DynamicRectangle", 0, 0, 50, 50)
        .addComponent(new RectangleUpdateComponent()));

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new Controller()));

    this.gameObjects.push(new PrefabTextLarge("LargeText", 20, 50, "Collision Game"));
    this.gameObjects.push(new PrefabTextSmall("SmallText", 20, 450, "Move the mouse to test collisions."));
    this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 500, "Type 1 to switch to a point"));
    this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 550, "Type 2 to switch to a circle"));
    this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 600, "Type 3 to switch to a rectangle"));
  }
}

export default MainScene;
