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

import Consnants from "./Constants.js"
import Constants from "./Constants.js";

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start() {

    let rectangleX = 250;
    let rectangleY = 250;
    let rectangleW = 75;
    let rectangleH = 25;

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

    for(let go of Constants){
      this.gameObjects.push(go.go);
    }

    
    

    this.gameObjects.push(new PrefabCircle("CircleSeparate1", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("CircleSeparate2", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate1", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate2", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate3", 0, 0, 5));
    this.gameObjects.push(new PrefabCircle("RectangleSeparate4", 0, 0, 5));

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new Controller()));

    this.gameObjects.push(new PrefabTextLarge("LargeText", 20, 50, "Collision Game"));
    this.gameObjects.push(new PrefabTextSmall("SmallText", 20, 450, "Move the mouse to test collisions."));

    let instructions = [
      "a point",
      "a circle",
      "a rectangle (separate axis theorem)",
      "a rectangle (circle approximation)"
    ]
    
    for(let i = 0; i < instructions.length; i++){
      this.gameObjects.push(new PrefabTextSmall("Instructions", 20, 500 + 50*i, "Type " + (i+1) + " to switch to " + instructions[i]))
    }
  }
}

export default MainScene;
