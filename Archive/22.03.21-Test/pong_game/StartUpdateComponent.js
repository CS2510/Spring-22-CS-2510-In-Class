import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"


class StartUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.ticks = 0;
  }
  update() {
    this.ticks += Time.secondsBetweenFrame;
    if(this.ticks > 3){
      //console.log("Updating")
      Game.changeScene(1);
    }

    
  
  }
}

export default StartUpdateComponent;