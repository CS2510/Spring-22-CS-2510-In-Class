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

let rectangleX = 250;
let rectangleY = 250;
let rectangleW = 75;
let rectangleH = 25;

export default [
  {
    name: "BiggerCircle", 
    visibility: [false, true, false, false],
    go:new PrefabCircle("BiggerCircle", 150, 150, 50 + 10),
  },
  {
    name: "CollisionCircle", 
    visibility: [true, true, true, true],
    go: new PrefabCircle("CollisionCircle", 150, 150, 50),
  },
  {
    name: "CollisionRectangle", 
    visibility: [true, false, true, true],
    go:new PrefabRectangle("CollisionRectangle",
    rectangleX,
    rectangleY,
    rectangleW,
    rectangleH),
  },
  {
    name: "DynamicPoint", 
    visibility: [true, false, false, false],
    go: new PrefabEmpty("DynamicPoint")
    .addComponent(new Point())
    .addComponent(new PointDraw(null, "transparent", "magenta"))
    .addComponent(new PointUpdateComponent()),
  },
  {
    name: "DynamicCircle", 
    visibility: [false, true, false, false],
    go: new PrefabCircle("DynamicCircle", 0, 0, 10)
    .addComponent(new CircleUpdateComponent()),
  },
  {
    name: "DynamicRectangle", 
    visibility: [false, false, true, true],
    go: new PrefabRectangle("DynamicRectangle", 0, 0, 50, 50)
    .addComponent(new RectangleUpdateComponent()),
  },
  {
    name: "CircleDebugLine", 
    visibility: [true, true, true, false],
    go:new PrefabLine("CircleDebugLine", 0, 0, 50, 25),
  },
  
  {
    name: "InnerCircle", 
    visibility: [false, false, false, true],
    go:new PrefabCircle("InnerCircle", 0, 0, 0),
  },
  {
    name: "InnerCircle2", 
    visibility: [false, false, false, true],
    go: new PrefabCircle("InnerCircle2", 0, 0, 0),
  },
  
  
];