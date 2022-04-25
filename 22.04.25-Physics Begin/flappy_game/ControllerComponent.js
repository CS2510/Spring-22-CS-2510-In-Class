import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"

import Time from "../engine/Time.js"


class ControllerComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velocity = 0;
    this.jumpTimer = 0;
    this.jumpStep = 1;



  }
  update(ctx) {

    //Get the main character's game object
    let flappyGameObject = Game.findByNameOne("Flappy");

    //Get the circle component of the main character 
    //so we can move the character around
    let flappy = flappyGameObject.getComponent("Circle");

    let frameAcceleration = 0;

    //Possible: Add jump timer
    //Respond to input
    //Respond to gravity


    //Update velocity based on acceleration
    
    //Cap velocity (terminal velocity)
    
    //Update position based on velocity
    

    //Game end condition
    if (flappy.y >= 200) {
      Game.changeScene(0);
    }

    //Now update the text
    //Get the text game objects
    let positionGameObject = Game.findByNameOne("PositionText");
    let velocityGameObject = Game.findByNameOne("VelocityText");
    let accelerationGameObject = Game.findByNameOne("AccelerationText");

    //Get the text components
    let position = positionGameObject.getComponent("Text");
    let velocity = velocityGameObject.getComponent("Text");
    let acceleration = accelerationGameObject.getComponent("Text");

    //Set the text component values
    position.text = "Position: " + (0).toFixed(2);
    velocity.text = "Velocity: " + (0).toFixed(2);
    acceleration.text = "Acceleration: " + (0).toFixed(2);






  }

}

export default ControllerComponent;
