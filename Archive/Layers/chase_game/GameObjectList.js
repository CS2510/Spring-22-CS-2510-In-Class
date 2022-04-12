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

let pauseInstructions = new PrefabTextSmall("PauseInstructions", 50, 50, "Push (p) to pause.")
pauseInstructions.layer = 2

let ticks = new PrefabTextSmall("Ticks", 50, 100, "0")
ticks.layer = 1;



//Draw the playing area first
let playingAreaRectangle = new PrefabRectangle("PlayingAreaRectangle", -200, -200, 400, 400);
playingAreaRectangle.getComponent("RectangleDraw").fillStyle = "lightgray";
playingAreaRectangle.layer = -2;


export default [
  pauseInstructions,
  ticks,
  
  playingAreaRectangle,
];