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

let rectangleX = 250;
let rectangleY = 250;
let rectangleW = 75;
let rectangleH = 25;

export default [
  {
    name: "BiggerCircle", 
    visibility: [false, true, false, false],
    go:new PrefabCircle("BiggerCircle", 150, 150, 50 + 10),
    colors:["rgba(255,255,255,.5)", "transparent"],
  },
  {
    name: "CollisionCircle", 
    visibility: [true, true, true, true],
    go: new PrefabCircle("CollisionCircle", 150, 150, 50),
    colors:["white", "white"],
  },
  {
    name: "CollisionRectangle", 
    visibility: [true, false, true, true],
    go:new PrefabRectangle("CollisionRectangle",
    rectangleX,
    rectangleY,
    rectangleW,
    rectangleH),
    colors:["white", "white"],
  },
  {
    name: "DynamicPoint", 
    visibility: [true, false, false, false],
    go: new PrefabPoint("DynamicPoint")
    .addComponent(new PointUpdateComponent()),
    colors:["white", "white"],
  },
  {
    name: "DynamicCircle", 
    visibility: [false, true, false, false],
    go: new PrefabCircle("DynamicCircle", 0, 0, 10)
    .addComponent(new CircleUpdateComponent()),
    colors:["magenta", "transparent"],
  },
  {
    name: "DynamicRectangle", 
    visibility: [false, false, true, true],
    go: new PrefabRectangle("DynamicRectangle", 0, 0, 50, 50)
    .addComponent(new RectangleUpdateComponent()),
    colors:["magenta", "transparent"],
  },
  {
    name: "CircleDebugLine", 
    visibility: [true, true, true, false],
    go:new PrefabLine("CircleDebugLine", 0, 0, 50, 25),
    colors:["blue", "blue"],
  },
  
  {
    name: "InnerCircle", 
    visibility: [false, false, false, true],
    go:new PrefabCircle("InnerCircle", 0, 0, 0),
    colors:["green", "transparent"],
  },
  {
    name: "InnerCircle2", 
    visibility: [false, false, false, true],
    go: new PrefabCircle("InnerCircle2", 0, 0, 0),
    colors:["green", "transparent"],
  },
  
  
];