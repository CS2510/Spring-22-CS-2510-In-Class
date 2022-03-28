import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"

class CollisionPointUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
   

  }
  update() {
    let point = this.parent.getComponent("Point");
    let {x, y} = Input.getMousePosition();
    point.x = x;
    point.y = y;


    let collisionPointGameObject = Game.findByType("PointGameObject")[0];
    let collisionCircleGameObject = Game.findByType("CircleGameObject")[0];
    let collisionAARGameObject = Game.findByType("AARGameObject")[0];

    let collisionPoint = collisionPointGameObject.getComponent("Point");
    let collisionCircle = collisionCircleGameObject.getComponent("Circle");
    let collisionAAR = collisionAARGameObject.getComponent("Rectangle");

    
    
  }
}

export default CollisionPointUpdateComponent;
