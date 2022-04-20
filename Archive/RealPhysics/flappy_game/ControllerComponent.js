import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"


class ControllerComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velocity = 0;
    this.jumpTimer = 0;
    this.jumpStep = 1;



  }
  update(ctx) {
    let flappyGameObject = Game.findByNameOne("Flappy");
    let flappy = flappyGameObject.getComponent("Circle");

    let frameAcceleration = 0;

    frameAcceleration = 9.8;

    this.jumpTimer += Time.secondsBetweenFrame;
    if (this.jumpTimer >= this.jumpStep) {

      if (Input.getKeyDown(" ")) {
        frameAcceleration = -200;
        this.jumpTimer = 0;
      }
    }


    //Update velocity based on acceleration
    this.velocity += frameAcceleration * Time.secondsBetweenFrame;
    this.velocity = Math.max(-10, this.velocity);

    //Update position based on velocity
    flappy.y += this.velocity * Time.secondsBetweenFrame;


    if (flappy.y >= 200) {
      Game.changeScene(0);
    }

    //Now update the text
    let positionGameObject = Game.findByNameOne("PositionText");
    let velocityGameObject = Game.findByNameOne("VelocityText");
    let accelerationGameObject = Game.findByNameOne("AccelerationText");

    let position = positionGameObject.getComponent("Text");
    let velocity = velocityGameObject.getComponent("Text");
    let acceleration = accelerationGameObject.getComponent("Text");

    position.text = "Position: " + flappy.y.toFixed(2);
    velocity.text = "Velocity: " + this.velocity.toFixed(2);
    acceleration.text = "Acceleration: " + frameAcceleration.toFixed(2);






  }

}

export default ControllerComponent;
