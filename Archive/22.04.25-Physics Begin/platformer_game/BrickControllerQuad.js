import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js"
import Game from "../engine/Game.js";

//Change the color of a brick if there is ever an overlap with the player
class BrickController extends Component{
  constructor(parent){
    super(parent)
  }
  update(ctx){
    //Get the player game object
    let playerGameObject = Game.findByNameOne("Player");

    // Get the player rectangle component
    let player = playerGameObject.getComponent("Rectangle");

    //Color based on collision status
    if(Collisions.inCollision(player, this.parent.getComponent("Rectangle"))){
      this.parent.getComponent("RectangleDraw").fillStyle = "white"
    }
    else{
      this.parent.getComponent("RectangleDraw").fillStyle = "brown"
    }
    
    //follow the player with the follow line
    let followLine = this.parent.components[this.parent.components.length - 4];
    let followLineDraw1 = this.parent.components[this.parent.components.length - 3];
    followLine.x2 = player.x + player.w/2;
    followLine.y2 = player.y + player.h/2;

    let followLine2 = this.parent.components[this.parent.components.length - 2];
    let followLineDraw2 = this.parent.components[this.parent.components.length - 1];
    followLine2.x2 = player.x + player.w/2;
    followLine2.y2 = player.y + player.h/2;

    let length1 = followLine.length();
    let length2 = followLine2.length();
    let minLength = Math.min(length1, length2);
    if(minLength > 50){
      followLineDraw1.strokeStyle = "Transparent";
      followLineDraw2.strokeStyle = "Transparent";
    }
    else if(length1 < length2){
      followLineDraw1.strokeStyle = "White";
      followLineDraw2.strokeStyle = "Transparent";
    }
    else{
      followLineDraw1.strokeStyle = "Transparent";
      followLineDraw2.strokeStyle = "White";
    }

  }
}

export default BrickController;