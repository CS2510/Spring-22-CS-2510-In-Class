import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Constants from "./Constants.js"

class PaddleUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.speed = 100;

  }
  update() {

    let wallLength = Constants.wallLength;
    let wallWidth = Constants.wallWidth;

    //Get the walls
    let walls = Game.findByType("WallGameObject");

    let minX = Math.min(...walls.map(w => w.getComponent("Rectangle").x))
    let minY = Math.min(...walls.map(w => w.getComponent("Rectangle").y))
    let maxX = Math.max(...walls.map(w => w.getComponent("Rectangle").x))
    let maxY = Math.max(...walls.map(w => w.getComponent("Rectangle").y + wallLength))

    let wall = walls[0].getComponent("Rectangle");
    


    let rectangle = this.parent.getComponent("Rectangle");
    let newX = rectangle.x;
    if(Input.getKey("ArrowLeft"))
    {
      newX = rectangle.x - this.speed * Time.secondsBetweenFrame;
    }
      
    if(Input.getKey("ArrowRight"))
    {
      newX = rectangle.x + this.speed * Time.secondsBetweenFrame;
    }

    if(newX < minX + wallWidth || newX > minX + wallWidth + wallLength - rectangle.w)
      return;
    rectangle.x = newX;

    //Check to see if all the balls are gone.
    let live = Game.findByType("BallGameObject");
    if (live.length <= 0)
      Game.changeScene(0);


    
  }
}

export default PaddleUpdateComponent;