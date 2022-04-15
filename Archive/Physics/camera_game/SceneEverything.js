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

class SceneEverything extends CameraScene {
  constructor() {
    super();
  }
  
  draw(ctx) {
    
    //Fill the canvas to the browser

    this.resizeCanvas(ctx)

    //Fill with a generic color. If the aspect ratio does not fill the browser exactly, then this is to color of the bars that will be displayed.
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Compensate for aspect ratio
    let currentAspectRatio = ctx.canvas.width / ctx.canvas.height;

    //Variables for the new drawing space
    let newX = ctx.canvas.width;
    let newY = ctx.canvas.height;
    let marginX = 0;
    let marginY = 0;


    if(Game.aspectRatio > currentAspectRatio){
      //Shrink in Y
      newY = ctx.canvas.width / Game.aspectRatio;
      marginY = (ctx.canvas.height - newY)/2;
    }
    else //if Game.aspectRatio <= currentaspectRatio
    {
      //Shrink in X
      newX = ctx.canvas.height * Game.aspectRatio;
      marginX = (ctx.canvas.width - newX)/2;
    }

  

    //Transform to account for the margins
    ctx.save();
    ctx.translate(marginX, marginY);

    //Clear the game drawing space
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(0, 0, newX, newY);
    ctx.beginPath();
    ctx.rect(0,0,newX,newY);
    ctx.clip();

    

    //Now adjust for the camera
    ctx.save();
    let pixelSize = newX/Game.cameraWidth*Game.cameraScale; //How large a unit in the world is in pixels. In a small screen, this is a small number. On a large screen, this is a large number
    console.log(pixelSize)
    // ctx.translate(pixelSize * )
    let ulX = Game.cameraX - (Game.cameraWidth/2)/Game.cameraScale;
    let ulY = Game.cameraY - (Game.cameraWidth/2)/Game.cameraScale;
    ctx.translate(pixelSize * -ulX, pixelSize * -ulY)
    ctx.scale(pixelSize, pixelSize);
    //ctx.translate(-Game.cameraX, -Game.cameraY);
    //We know the size of the display: newX, newY

    //Draw Layers
    for (let i = -2; i <= 0; i++) {
      for (let gameObject of this.gameObjects.filter(go => go.layer == i)) {
        gameObject.draw(ctx);
      }
    }

    ctx.restore();//Remove camera transforms
    //Draw the game objects that are not affected by the camera movement
    for (let i = 1; i <= 2; i++) {
      for (let gameObject of this.gameObjects.filter(go => go.layer == i)) {
        gameObject.draw(ctx);
      }
    }
    ctx.restore();//Remove aspect ratio transforms
  }
}

export default SceneEverything;
