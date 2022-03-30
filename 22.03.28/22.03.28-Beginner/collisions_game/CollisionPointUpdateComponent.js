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


    let collisionCircleGameObject = Game.findByNameOne("Circle");
    let collisionAARGameObject = Game.findByNameOne("Rectangle");

    let collisionCircle = collisionCircleGameObject.getComponent("Circle");
    let collisionAAR = collisionAARGameObject.getComponent("Rectangle");

    
    
  }
}

export default CollisionPointUpdateComponent;
