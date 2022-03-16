import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Constants from "./Constants.js"

class BallUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velX = 15 * 2;
    this.velY = 25 * 2;
    this.timePassed = 0 // Simple timer for deleting

  }
  update() {

    let wallWidth = Constants.wallWidth;
    let wallLength = Constants.wallLength;

    let circle = this.parent.getComponent("Circle");
    let r = circle.r;

    //Get the walls
    let walls = Game.findByType("WallGameObject");
    let paddleGameObject = Game.findByType("PaddleGameObject")[0];
    let scoreGameObject = Game.findByType("ScoreGameObject")[0];

    let paddleRectangle = paddleGameObject.getComponent("Rectangle");
    let score = scoreGameObject.getComponent("ScoreUpdateComponent");


    let minX = Math.min(...walls.map(w => w.getComponent("Rectangle").x))
    let minY = Math.min(...walls.map(w => w.getComponent("Rectangle").y))
    let maxX = Math.max(...walls.map(w => w.getComponent("Rectangle").x))
    let maxY = Math.max(...walls.map(w => w.getComponent("Rectangle").y + wallLength))

    let x = circle.x;
    let y = circle.y;

    if (x - r <= minX + wallWidth || x + r >= maxX)
      this.velX *= -1;
    if (y - r <= minY + wallWidth)
      this.velY *= -1;
    if (y + r >= maxY) {
      //It went too far

      //Check to see if we collide with the paddle
      if (circle.x < paddleRectangle.x || circle.x > paddleRectangle.x + Constants.paddleWidth) {
        this.parent.markForDelete = true;
        Game.changeScene(0);
      }
      else {
        this.velY *= -1;
        score.ticks += 1;
        this.velY *= 1.1;
        this.velX *= 1.1;

      }
    }
    circle.x += this.velX * Time.secondsBetweenFrame;
    circle.y += this.velY * Time.secondsBetweenFrame;
  }
}

export default BallUpdateComponent;