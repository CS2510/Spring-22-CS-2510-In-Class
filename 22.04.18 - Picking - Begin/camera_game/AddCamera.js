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


class AddCamera extends CameraScene {
  constructor() {
    super();
  }
  
  draw(ctx) {
    
    //Fill the canvas to the browser

    this.resizeCanvas(ctx)
    this.clearCanvas(ctx);


    let aspectRatio = this.aspectRatio(ctx)
    this.centerAspectRatio(ctx,aspectRatio);
    this.drawBackground(ctx,aspectRatio);
    this.clip(ctx, aspectRatio);

    ctx.save();
    let pixelSize = this.getPixelSize(aspectRatio);
    let cameraUpperLeft = this.getCameraUpperLeft();

    this.addCamera(ctx, pixelSize, cameraUpperLeft);
    //ctx.translate(-Game.cameraX, -Game.cameraY);
    //We know the size of the display: newX, newY

    this.drawEverything(ctx);

    
  }
}

export default AddCamera;
