import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"
import Input from "../engine/Input.js"


class GoSouthUpdateComponent extends Component {
  constructor(parent) {
    super(parent);

  }
  update() {
    let rectangle = this.parent.getComponent("Rectangle");


    if (Input.getMouseButtonDown(0)) {
      let mx = Input.getMousePosition().x;
      let my = Input.getMousePosition().y;

      if (mx > rectangle.x && mx < rectangle.x + rectangle.w && my > rectangle.y && my < rectangle.y + rectangle.h) {
        if(!Game.persist)
          Game.persist = {};
        if(!Game.persist.score)
          Game.persist.score = 1;
        else{
          Game.persist.score++;
        }
        Game.changeScene(1)
      }
    }
  }
}

export default GoSouthUpdateComponent;