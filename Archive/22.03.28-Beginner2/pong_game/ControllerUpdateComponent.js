import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Constants from "./Constants.js"
import BallGameObject from "./BallGameObject.js"

class ControllerUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
   
  }
  update() {
    if(Math.random() > .9){
      let newBallGameObject = Game.instantiate(new BallGameObject(200,200,20))
    }

    //End the scene if there isn't a remaining ball
    let balls = Game.findByName("Ball");
    if(!balls || balls.length == 0){
      Game.changeScene(0);
    }

  }
}

export default ControllerUpdateComponent;
