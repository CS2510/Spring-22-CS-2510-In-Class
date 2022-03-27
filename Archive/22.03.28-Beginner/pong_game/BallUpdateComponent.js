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

    let paddleGameObject = Game.findByName("Paddle");
    let rectangle = paddleGameObject.getComponent("Rectangle");

    let circle = this.parent.getComponent("Circle");
    let r = circle.r;

    //Get the walls
    let walls = Game.filterByType("WallGameObject");

    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;



    minX = Math.min(...walls.map(w => w.getComponent("Rectangle").x))
    minY = Math.min(...walls.map(w => w.getComponent("Rectangle").y))
    maxX = Math.max(...walls.map(w => w.getComponent("Rectangle").x))
    maxY = Math.max(...walls.map(w => w.getComponent("Rectangle").y + wallLength))


    console.log("found " + minX + ", " + minY + " " + maxX + ", " + maxY);




    let x = circle.x;
    let y = circle.y;

    if (x - r <= minX + 10 || x + r >= maxX)
      this.velX *= -1;
    if (y - r <= minY + 10)
      this.velY *= -1;
    if (y + r >= maxY) {
      if (rectangle.x < circle.x && rectangle.x + rectangle.w > circle.x) {
        this.velY *= -1;
        this.velY *= 1.2;
        this.velX *= 1.2;
        //Game.findByName("Score").getComponent("ScoreUpdateComponent").ticks++;
      }
      else {
        Game.changeScene(0);
      }
    }
    circle.x += this.velX * Time.secondsBetweenFrame;
    circle.y += this.velY * Time.secondsBetweenFrame;


    this.timePassed += Time.secondsBetweenFrame;
    if (this.timePassed >= 1) {
      //Delete my score game object
      let score = Game.findByName("Score");
      //if (score)
      //  score.markForDelete = true;
    }
    //Delete the score
  }
}

export default BallUpdateComponent;
