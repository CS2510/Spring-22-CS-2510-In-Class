import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"


class StatusUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.movements = 0;
  }
  update() {
   let text = this.parent.getComponent("Text");
   let status = Game.persistent.movements;
   if(typeof Game.persistent.movements == "undefined"){
    Game.persistent.movements = 0;
     status = 0;
   }
    
    text.text = "You have moved " + status + " times";
  }
}

export default StatusUpdateComponent;