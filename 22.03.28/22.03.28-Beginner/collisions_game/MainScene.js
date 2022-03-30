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

    let rectangleX = 250;
    let rectangleY = 250;
    let rectangleW = 75;
    let rectangleH = 25;

    this.gameObjects.push(new PrefabCircle("BiggerCircle", 150, 150, 50 + 10));
    this.gameObjects.push(new PrefabCircle("Circle", 150, 150, 50));


    this.gameObjects.push(new PrefabLine("RectangleLeftBoundary",
      rectangleX, rectangleY - 30, rectangleX, rectangleY + rectangleH + 30)
    )
    this.gameObjects.push(new PrefabLine("RectangleRightBoundary",
      rectangleX + rectangleW, rectangleY - 30, rectangleX + rectangleW, rectangleY + rectangleH + 30)
    )
    this.gameObjects.push(new PrefabLine("RectangleTopBoundary",
      rectangleX - 30, rectangleY, rectangleX + rectangleW + 30, rectangleY)
    )
    this.gameObjects.push(new PrefabLine("RectangleBottomBoundary",
      rectangleX - 30, rectangleY + rectangleH, rectangleX + rectangleW + 30, rectangleY + rectangleH)
    )

    this.gameObjects.push(new PrefabRectangle("Rectangle",
      rectangleX,
      rectangleY,
      rectangleW,
      rectangleH));



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

    this.gameObjects.push(new PrefabLine("CircleDebugLine", 0, 0, 50, 25));

    this.gameObjects.push(new PrefabCircle("CircleSeparate1", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("CircleSeparate2", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate1", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate2", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate3", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate4", 0, 0, 5));


    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new Controller()));

    this.gameObjects.push(new PrefabTextLarge("LargeText", 20, 50, "Collision Game"));
    this.gameObjects.push(new PrefabTextSmall("SmallText", 20, 450, "Move the mouse to test collisions."));
    this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 500, "Type 1 to switch to a point"));
    this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 550, "Type 2 to switch to a circle"));
    this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 600, "Type 3 to switch to a rectangle"));
  }
}

export default MainScene;
