import CameraScene from "./CameraScene.js"
import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";
import PrefabTextLarge from "../engine/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/PrefabTextSmall.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import ControllerComponent from "./ControllerComponent.js"
import Game from "../engine/Game.js"

import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";


class CenteredAspectRatio extends CameraScene {
  constructor() {
    super();
  }
  
  draw(ctx) {
    
    //Fill the canvas to the browser

    this.resizeCanvas(ctx)

    this.centeredAspectRatio(ctx)

    this.drawEverything(ctx);

    
  }
}

export default CenteredAspectRatio;
