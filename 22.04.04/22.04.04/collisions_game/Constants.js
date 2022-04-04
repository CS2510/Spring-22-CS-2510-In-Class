import Scene from "../engine/Scene.js"
import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";
import PrefabPoint from "../engine/PrefabPoint.js";
import PrefabTextLarge from "../engine/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/PrefabTextSmall.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import Controller from "./Controller.js"

import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";

import PointUpdateComponent from "./PointUpdateComponent.js";
import CircleUpdateComponent from "./CircleUpdateComponent.js";
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";

import Settings from "./Settings.js"

let rectangleX = Settings.rectangleX;
let rectangleY = Settings.rectangleY;
let rectangleW = Settings.rectangleW;
let rectangleH = Settings.rectangleH;

export default [
  {
    visibility: [false, true, false, false, false],
    go: new PrefabCircle("BiggerCircle", 150, 150, Settings.collisionCircleRadius + Settings.circleRadius),
    colors: ["rgba(255,255,255,.5)", "transparent"],
  },
  {
    visibility: [false, true, false, false, false],
    go: new PrefabRectangle("BiggerRectangle", rectangleX + 150-Settings.circleRadius, rectangleY + 150-Settings.circleRadius, rectangleW+Settings.circleRadius*2, rectangleW+Settings.circleRadius*2),
    colors: ["rgba(255,255,255,.5)", "transparent"],
  },
  {
    visibility: [true, true, true, true, true],
    go: new PrefabCircle("CollisionCircle", 150, 150, Settings.collisionCircleRadius),
    colors: ["white", "white"],
  },
  {
    visibility: [true, false, true, true, false],
    go: new PrefabRectangle("CollisionRectangle",
      rectangleX,
      rectangleY,
      rectangleW,
      rectangleH),
    colors: ["white", "white"],
  },
  {
    visibility: [true, true, true, true, false],
    go: new PrefabRectangle("CollisionRectangle2", rectangleX + 150, rectangleY + 150, rectangleW, rectangleW),
    colors: ["white", "transparent"]
  },
  {
    visibility: [true, false, false, false, false],
    go: new PrefabPoint("DynamicPoint")
      .addComponent(new PointUpdateComponent()),
    colors: ["magenta", "transparent"],
  },
  {
    visibility: [false, true, false, false, false],
    go: new PrefabCircle("DynamicCircle", 0, 0, Settings.circleRadius)
      .addComponent(new CircleUpdateComponent()),
    colors: ["magenta", "transparent"],
  },
  {
    visibility: [false, false, true, true, true],
    go: new PrefabRectangle("DynamicRectangle", 0, 0, 50, 50)
      .addComponent(new RectangleUpdateComponent()),
    colors: ["magenta", "transparent"],
  },
  {
    visibility: [true, true, true, false, false],
    go: new PrefabLine("CircleDebugLine", 0, 0, 50, 25),
    colors: ["blue", "blue"],
  },
  {
    visibility: [false, false, false, true, false],
    go: new PrefabCircle("InnerCircle", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, true, false],
    go: new PrefabCircle("InnerCircle2", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, true, false],
    go: new PrefabCircle("InnerCircle3", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabCircle("CornerCircleUL", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabCircle("CornerCircleUR", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabCircle("CornerCircleLR", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabCircle("CornerCircleLL", 0, 0, 0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabCircle("CircleCenter", 150, 150, 5),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabRectangle("MultiplesRectangle1", 0,0,0,0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },
  {
    visibility: [false, false, false, false, true],
    go: new PrefabRectangle("MultiplesRectangle2", 0,0,0,0),
    colors: ["rgba(100,100,100,.75)", "transparent"],
  },



];