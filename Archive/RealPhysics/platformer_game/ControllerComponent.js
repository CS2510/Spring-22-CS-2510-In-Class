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
    this.canJump = false;
    this.lateralSpeed = 10;



  }
  update(ctx) {
    let flappyGameObject = Game.findByNameOne("Player");
    let flappy = flappyGameObject.getComponent("Rectangle");

    let frameAcceleration = 0;

    frameAcceleration = 9.8;

    this.jumpTimer += Time.secondsBetweenFrame;
    if (this.jumpTimer >= this.jumpStep && this.canJump) {

      if (Input.getKeyDown(" ") || Input.getKeyDown("ArrowUp")) {
        frameAcceleration = -200;
        this.jumpTimer = 0;
      }
    }

    let newVelocity = this.velocity;
    let newPosition = flappy.y;
    

    //Update velocity based on acceleration
    newVelocity += frameAcceleration * Time.secondsBetweenFrame;
    newVelocity = Math.min(10, newVelocity);
    newVelocity = Math.max(-10, newVelocity);

    this.velocity = newVelocity;

    //Update position based on velocity
    newPosition += this.velocity * Time.secondsBetweenFrame;

    flappy.y = newPosition;


    //Check to make sure we don't penetrate the ground
    let groundGameObjects = Game.findByName("PrefabGround");
    this.canJump = false;
    for(let groundGameObject of groundGameObjects){
      let ground = groundGameObject.getComponent("Rectangle");
      if(Collisions.inCollision(flappy, ground)){
        console.log("In collision");
        this.canJump = true;
        //Reposition the player so we are not going through the surface
        flappy.y = ground.y - flappy.h
      }
      
    }


    //Deal with left and right movement
    let newX = flappy.x;

    if(Input.getKey("ArrowLeft"))
      newX -= this.lateralSpeed * Time.secondsBetweenFrame;
    if(Input.getKey("ArrowRight"))
      newX += this.lateralSpeed * Time.secondsBetweenFrame;

    flappy.x = newX;


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
