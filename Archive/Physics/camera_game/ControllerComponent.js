import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"

import MathPoint from "../engine/math/Point.js"
import Line from "../engine/Line.js";
import PrefabCircle from "../engine/PrefabCircle.js";
import Point from "../engine/Point.js";
import mathPoint from "../engine/math/Point.js"

class ControllerComponent extends Component {
  constructor(parent) {
    super(parent);
    this.playerSpeed = 100;
    this.circleHalfRange = 200;

   
  }
  update() {

    if(Input.getKeyDown("1"))
      Game.changeScene(0);
    if(Input.getKeyDown("2"))
      Game.changeScene(1);
    if(Input.getKeyDown("3"))
      Game.changeScene(2);
    if(Input.getKeyDown("4"))
      Game.changeScene(3);
    if(Input.getKeyDown("5"))
      Game.changeScene(4);

      let playerGameObject = Game.findByNameOne("Player");
      let playerCircle = playerGameObject.getComponent("Circle");

      let diffX = 0;
      let diffY = 0;
      if (Input.getKey("a") || Input.getKey("ArrowLeft")) {
        diffX -= this.playerSpeed * Time.secondsBetweenFrame;
      }
      if (Input.getKey("d") || Input.getKey("ArrowRight")) {
        diffX += this.playerSpeed * Time.secondsBetweenFrame;
      }
      if (Input.getKey("s") || Input.getKey("ArrowDown")) {
        diffY += this.playerSpeed * Time.secondsBetweenFrame;
      }
      if (Input.getKey("w") || Input.getKey("ArrowUp")) {
        diffY -= this.playerSpeed * Time.secondsBetweenFrame;
      }

      //Check to see if the player can move in the desired direction
      if (playerCircle.x + diffX > -this.circleHalfRange + playerCircle.r &&
        playerCircle.x + diffX + playerCircle.r < this.circleHalfRange)
        playerCircle.x += diffX;
      if (playerCircle.y + diffY > -this.circleHalfRange + playerCircle.r &&
        playerCircle.y + diffY + playerCircle.r < this.circleHalfRange) {
        playerCircle.y += diffY;
      }

      
  }
}

export default ControllerComponent;
