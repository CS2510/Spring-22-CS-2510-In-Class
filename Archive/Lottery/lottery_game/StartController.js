import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"


class StartConttroller extends Component {
  constructor(parent) {
    super(parent);

  }
  update(ctx) {
    if(Input.getKeyDown(" ")){
      Game.changeScene(1)
    }


    
  }

}

export default StartConttroller;
