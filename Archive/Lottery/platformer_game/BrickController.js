import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js"
import Game from "../engine/Game.js";

class BrickController extends Component{
  constructor(parent){
    super(parent)
  }
  update(ctx){
    let playerGameObject = Game.findByNameOne("Player");
    let player = playerGameObject.getComponent("Rectangle");
    if(Collisions.inCollision(player, this.parent.getComponent("Rectangle"))){
      this.parent.getComponent("RectangleDraw").fillStyle = "white"
    }
    else{
      this.parent.getComponent("RectangleDraw").fillStyle = "brown"
    }

  }
}

export default BrickController;