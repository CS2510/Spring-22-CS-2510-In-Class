import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"

import MathPoint from "../engine/math/Point.js"
import Line from "../engine/Line.js";
import PrefabCircle from "../engine/PrefabCircle.js";
import Point from "../engine/Point.js";
import mathPoint from "../engine/math/Point.js"

class ControllerComponent extends Component {
  constructor(parent) {
    super(parent);
    this.playerSpeed = 100;
    this.circleHalfRange = 200;


  }
  update(ctx) {

    Game.cameraScale = 1;
    if (Game.scene().constructor.name == "Zoom") {
      Game.cameraScale = 2;
    }

    if (Input.getKeyDown("1"))
      Game.changeScene(0);
    if (Input.getKeyDown("2"))
      Game.changeScene(1);
    if (Input.getKeyDown("3"))
      Game.changeScene(2);
    if (Input.getKeyDown("4"))
      Game.changeScene(3);
    if (Input.getKeyDown("5"))
      Game.changeScene(4);
    if (Input.getKeyDown("6"))
      Game.changeScene(5);
    if (Input.getKeyDown("7"))
      Game.changeScene(6);
    if (Input.getKeyDown("8")) {
      Game.changeScene(7);

    }
    if (Input.getKeyDown("9"))
      Game.changeScene(8);

    let playerGameObject = Game.findByNameOne("Player");
    let playerCircle = playerGameObject.getComponent("Circle");

    let diffX = 0;
    let diffY = 0;
    if (Input.getKey("a") || Input.getKey("ArrowLeft")) {
      diffX -= this.playerSpeed * Time.secondsBetweenFrame;
    }
    if (Input.getKey("d") || Input.getKey("ArrowRight")) {
      diffX += this.playerSpeed * Time.secondsBetweenFrame;
    }
    if (Input.getKey("s") || Input.getKey("ArrowDown")) {
      diffY += this.playerSpeed * Time.secondsBetweenFrame;
    }
    if (Input.getKey("w") || Input.getKey("ArrowUp")) {
      diffY -= this.playerSpeed * Time.secondsBetweenFrame;
    }

    if (diffX || diffY) {
      console.log(diffX + ", " + diffY);
    }

    //Check to see if the player can move in the desired direction
    if (playerCircle.x + diffX > -this.circleHalfRange + playerCircle.r &&
      playerCircle.x + diffX + playerCircle.r < this.circleHalfRange)
      playerCircle.x += diffX;
    if (playerCircle.y + diffY > -this.circleHalfRange + playerCircle.r &&
      playerCircle.y + diffY + playerCircle.r < this.circleHalfRange) {
      playerCircle.y += diffY;
    }


    //Get values for tracing and picking
    let transitionTextGameObject = Game.findByNameOne("TransitionText");
    let transitionText = transitionTextGameObject.getComponent("Text");
    
    let currentScene = Game.scene();
    let aspectRatio = currentScene.aspectRatio(ctx);
    let pixelSize = currentScene.getPixelSize(aspectRatio);
    let cameraUpperLeft = currentScene.getCameraUpperLeft(ctx);
    let cameraHalfWidth = Game.cameraWidth/2;
    let cameraHalfHeight = Game.cameraWidth/2;
    let halfScreenWidth = aspectRatio.newX/2;
    let halfScreenHeight = aspectRatio.newY/2;


    let x = playerCircle.x;
    let y = playerCircle.y;

    x -= Game.cameraX;
    y -= Game.cameraY;

    x /= Game.cameraWidth/2 / Game.cameraScale;
    y /= Game.cameraWidth/2 / Game.cameraScale;

    x *= aspectRatio.newX/2;
    y *= aspectRatio.newY/2;

    x += aspectRatio.newX/2;
    y += aspectRatio.newY/2;
    
    //Do the actual tracing
    transitionText.x = x;
    transitionText.y = y;


    //Now print the mouse position
    let screenPosition = Input.getMousePosition();
    let toPrint = "";
    toPrint += "Browser Position " + this.toString(screenPosition);

    x = screenPosition.x;
    y = screenPosition.y;

    x-=aspectRatio.marginX;
    y-=aspectRatio.marginY;

    x-=aspectRatio.newX/2;
    y-=aspectRatio.newY/2;
     
    x/=aspectRatio.newX/2;
    y/=aspectRatio.newY/2;

    x *= Game.cameraWidth/2/Game.cameraScale;
    y *= Game.cameraWidth/2/Game.cameraScale;

    x += Game.cameraX;
    y += Game.cameraY;

    console.log(x + ", " + y);


    if(Collisions.inCollision(new Point(null, x,y), playerCircle)){
      playerGameObject.getComponent("CircleDraw").fillStyle = "orange"
    }
    else{
      playerGameObject.getComponent("CircleDraw").fillStyle = "gray"
    }


  }
  clonePoint(object) {
    return { x: object.x, y: object.y };
  }
  toString(point) {
    return point.x + ", " + point.y;
  }
}

export default ControllerComponent;
