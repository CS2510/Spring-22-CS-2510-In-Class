import Scene from "../engine/Scene.js"
import WallGameObject from "./WallGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import BallGameObject from "./BallGameObject.js"
import PaddleGameObject from "./PaddleGameObject.js";
import Constants from "./Constants.js"

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
    
    //Add the walls
    let startX = Constants.startX;
    let startY = Constants.startY;
    let wallWidth = Constants.wallWidth;
    let wallLength = Constants.wallLength;
    this.gameObjects.push(new WallGameObject(startX + wallWidth, startY, wallLength, wallWidth));
    this.gameObjects.push(new WallGameObject(startX, startY + wallWidth, wallWidth, wallLength));
    
    this.gameObjects.push(new WallGameObject(startX + wallLength + wallWidth, startY + wallWidth, wallWidth, wallLength));

    //Add the text
    this.gameObjects.push(new ScoreGameObject(100, 30));

    //Add the ball
    this.gameObjects.push(new BallGameObject(200, 200, 5))

    //Add the paddle
    let paddleWidth = Constants.paddleWidth;
    this.gameObjects.push(new PaddleGameObject(startX + wallWidth + wallLength/2 - paddleWidth/2, startY + wallLength + wallWidth, paddleWidth, wallWidth));
  }
}

export default MainScene;