import Scene from "../engine/Scene.js"
import WallGameObject from "./WallGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import BallGameObject from "./BallGameObject.js"

class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");

    //Add the walls
    let startX = 100;
    let startY = 100;
    let wallWidth = 10;
    let wallLength = 200;
    this.gameObjects.push(new WallGameObject(startX + wallWidth, startY, wallLength, wallWidth));
    this.gameObjects.push(new WallGameObject(startX, startY + wallWidth, wallWidth, wallLength));
    this.gameObjects.push(new WallGameObject(startX + wallWidth, startY + wallLength + wallWidth, wallLength, wallWidth));
    this.gameObjects.push(new WallGameObject(startX + wallLength + wallWidth, startY + wallWidth, wallWidth, wallLength));

    //Add the text
    this.gameObjects.push(new ScoreGameObject(100, 30));

    //Add the ball
    this.gameObjects.push(new BallGameObject(200, 200, 20))
  }
}

export default MainScene;