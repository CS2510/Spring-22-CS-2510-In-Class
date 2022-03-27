import Scene from "../engine/Scene.js"
import WallGameObject from "./WallGameObject.js";
import TextPrefab from "../engine/TextPrefab.js";
import CirclePrefab from "../engine/CirclePrefab.js"
import Constants from "./Constants.js"
import RectanglePrefab from "../engine/RectanglePrefab.js"
import PaddleUpdateComponent from "./PaddleUpdateComponent.js";
import BallUpdateComponent from "./BallUpdateComponent.js";
import ScoreUpdateComponent from "./ScoreUpdateComponent.js";

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start() {

    //Add the walls
    let startX = Constants.startX;
    let startY = Constants.startY;
    let wallWidth = Constants.wallWidth;
    let wallLength = Constants.wallLength;
    this.gameObjects.push(new WallGameObject(startX + wallWidth, startY, wallLength, wallWidth));
    this.gameObjects.push(new WallGameObject(startX, startY + wallWidth, wallWidth, wallLength));
    //this.gameObjects.push(new WallGameObject(startX + wallWidth, startY + wallLength + wallWidth, wallLength, wallWidth));
    this.gameObjects.push(new WallGameObject(startX + wallLength + wallWidth, startY + wallWidth, wallWidth, wallLength));

    let minX = Math.min(...this.gameObjects.map(w => w.getComponent("Rectangle").x))
    let minY = Math.min(...this.gameObjects.map(w => w.getComponent("Rectangle").y))
    let maxX = Math.max(...this.gameObjects.map(w => w.getComponent("Rectangle").x))
    let maxY = Math.max(...this.gameObjects.map(w => w.getComponent("Rectangle").y + wallLength))



    //Add the text
    // this.gameObjects.push(new ScoreGameObject(100, 30));
    this.gameObjects.push(new TextPrefab("Score",
      100, 30, "hi", "20px sans", "white", "white", [new ScoreUpdateComponent()]
    ));

    //Add the ball
    this.gameObjects.push(new CirclePrefab("Ball", 200, 200, 20, "red", "transparent", [new BallUpdateComponent()]));

    // this.gameObjects.push(new BallGameObject(200, 200, 20))




    //We need to find the middle of the game and subtract half my paddle width
    let paddleWidth = 50
    let px = (minX + maxX) / 2 - paddleWidth / 2;
    let py = maxY;
    //this.gameObjects.push(new PaddleGameObject(px, py, paddleWidth));

    this.gameObjects.push(new RectanglePrefab(
      "Paddle",
      px, py, paddleWidth, Constants.wallWidth,
      "orange", "purple", [new PaddleUpdateComponent()])
      );
  }
}

export default MainScene;
