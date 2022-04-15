import PrefabCircle from "../engine/PrefabCircle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import PrefabLine from "../engine/PrefabLine.js";
import PrefabTextLarge from "../engine/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/PrefabTextSmall.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import ControllerComponent from "./ControllerComponent.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"

import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";

class CameraScene extends Scene {
  constructor() {
    super("Camera Scene");
  }
  start() {
    this.fillColor = "black"

    let sceneNames = [
      "Nothing", 
      "ResizeCanvas", 
      "Aspect Ratio", 
      "CenteredAspectRatio",
      "Clip Scene",
      "Everything",
    ];

    let y = 50
    let i = 0;
    for (let sceneName of sceneNames) {
      var text = new PrefabTextSmall(sceneName, 10, y, ++i + ". " + sceneName);
      text.layer = 2;
      this.gameObjects.push(text);
      y += 50;
    }

    let player1 = new PrefabCircle("Player", 0, 0, 10);
    player1.layer = 0;
    this.gameObjects.push(player1);



    this.gameObjects.push(new PrefabEmpty("ControllerGameObject").addComponent(new ControllerComponent()));



  }
  draw(ctx) {
    //Override the draw function is scene to see the how the 
    //camera works.
  }
  drawEverything(ctx) {
    for (let gameObject of this.gameObjects) {
      gameObject.draw(ctx);
    }
  }
  clearCanvas(ctx){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
  }
  drawBackground(ctx, aspectRatio) {//Clear the game drawing space
    var width = aspectRatio?.newX || ctx.canvas.width;
    var height = aspectRatio?.newY || ctx.canvas.height;
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(0, 0, width, height);
  }
  resizeCanvas(ctx) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    ctx.canvas.width = width;
    ctx.canvas.height = height;
  }
  aspectRatio(ctx) {
    //Fill with a generic color. If the aspect ratio does not fill the browser exactly, then this is to color of the bars that will be displayed.
    // ctx.fillStyle = "gray";
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let aspectRatio = this.calculateAspectRatio(ctx);
    return aspectRatio;

    //Clear the game drawing space
    // ctx.fillStyle = this.fillColor;
    // ctx.fillRect(0, 0, aspectRatio.newX, aspectRatio.newY);


  }
  calculateAspectRatio(ctx){
    //Compensate for aspect ratio
    let currentAspectRatio = ctx.canvas.width / ctx.canvas.height;

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
    return {
      newX,
      newY,
      marginX,
      marginY,
    }
  }
  centerAspectRatio(ctx, aspectRatio){
    //Transform to account for the margins
    ctx.save();
    ctx.translate(aspectRatio.marginX, aspectRatio.marginY);

     //Clear the game drawing space
    //  ctx.fillStyle = this.fillColor;
    //  ctx.fillRect(0, 0, aspectRatio.newX, aspectRatio.newY);
  }
  clip(ctx, aspectRatio){
    ctx.beginPath();
    ctx.rect(0,0,aspectRatio.newX, aspectRatio.newY)
    ctx.clip()
  }
}

export default CameraScene