import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"


class GoNorthUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    if(this.time > 1){
      Game.Persistent.movements++;
      Game.changeScene(0)
    }
    
  }
}

export default GoNorthUpdateComponent;