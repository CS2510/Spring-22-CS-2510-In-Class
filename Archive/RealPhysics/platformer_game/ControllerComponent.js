import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"
import Rectangle from "../engine/components/Rectangle.js";


class ControllerComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velocityY = 0;
    this.velocityX = 0;
    this.jumpTimer = 0;
    this.jumpStep = 1;
    this.canJump = false;
    this.lateralAcceleration = 1000;
    this.gravity = 32;
    this.jumpForce = 500;
    this.FALLING = 0;
    this.RESTING = 1;
    this.JUMPING = 2
    this.state = this.FALLING;



  }
  update(ctx) {
    let playerGameObject = Game.findByNameOne("Player");
    let player = playerGameObject.getComponent("Rectangle");

    let newY = player.y;
    let newX = player.x;
    
    let newVelocityY = this.velocityY;
    let newVelocityX = this.velocityX;

    let frameAccelerationY = 0;
    let frameAccelerationX = 0;
    let frameGravity = 0;
    let frameJumpForce = 0;
    frameGravity = this.gravity * Time.secondsBetweenFrame;

    this.jumpTimer += Time.secondsBetweenFrame;

    



    //Deal with left and right movement

    if (Input.getKey("ArrowLeft"))
      frameAccelerationX = -this.lateralAcceleration * Time.secondsBetweenFrame;
    else if (Input.getKey("ArrowRight"))
      frameAccelerationX = this.lateralAcceleration * Time.secondsBetweenFrame;
    else{
      frameAccelerationX = 0;
    }


    var futureRectangle = new Rectangle(null, newX, newY, player.w, player.h);






    let brickGameObjects = Game.findByName("PrefabBrick");
    this.canJump = false;



    for (let brickGameObject of brickGameObjects) {
      let brick = brickGameObject.getComponent("Rectangle");
      //Check to see if we are falling on the brick
      if (Collisions.isRestingOn(player, brick) && this.state == this.RESTING) {
        this.canJump = true;
        //Reposition the player so we are not going through the surface
        //player.y = brick.y - player.h
        newY = brick.y - player.h;
        if (frameAcceleration < 0) {

        }
        else
          if (newVelocityY > 0) {
            newVelocityY = 0;
          }
      }

      else if (Collisions.isAbove(player, brick) && Collisions.inCollision(futureRectangle, brick)) {
        //this.canJump = true;
        //Reposition the player so we are not going through the surface
        //player.y = brick.y - player.h
        this.state = this.RESTING;
        newY = brick.y - player.h;
        if (newVelocityY > 0) {
          newVelocityY = 0;
        }
      }
      else {

      }

    }

    if (this.jumpTimer >= this.jumpStep && this.canJump) {

      if (Input.getKeyDown(" ") || Input.getKeyDown("ArrowUp")) {
        frameAcceleration = -this.jumpForce;
        this.jumpTimer = 0;
      }
    }

    // if (!this.canJump)
    //   newVelocityY += frameAcceleration * Time.secondsBetweenFrame;
    // this.velocityY = newVelocityY;

    //Update velocity based on acceleration
    newVelocityY = this.velocityY + frameAccelerationY * Time.secondsBetweenFrame;
    newVelocityX = /*this.velocityX +*/ frameAccelerationX * Time.secondsBetweenFrame;

    //Update position based on velocity
    newY += newVelocityY * Time.secondsBetweenFrame;
    newX += newVelocityX * Time.secondsBetweenFrame;


    player.x = newX;
    player.y = newY;

    this.velocityX = newVelocityX;
    this.velocityY = newVelocityY;




    //Now update the text
    let positionGameObjectY = Game.findByNameOne("PositionTextY");
    let velocityGameObjectY = Game.findByNameOne("VelocityTextY");
    let accelerationGameObjectY = Game.findByNameOne("AccelerationTextY");

    let positionGameObjectX = Game.findByNameOne("PositionTextX");
    let velocityGameObjectX = Game.findByNameOne("VelocityTextX");
    let accelerationGameObjectX = Game.findByNameOne("AccelerationTextX");

    let positionY = positionGameObjectY.getComponent("Text");
    let velocityY = velocityGameObjectY.getComponent("Text");
    let accelerationY = accelerationGameObjectY.getComponent("Text");

    let positionX = positionGameObjectX.getComponent("Text");
    let velocityX = velocityGameObjectX.getComponent("Text");
    let accelerationX = accelerationGameObjectX.getComponent("Text");
    
    positionY.text = "PositionY: " + player.y.toFixed(2);
    velocityY.text = "VelocityY: " + this.velocityY.toFixed(2);
    accelerationY.text = "AccelerationY: " + frameAccelerationY.toFixed(2);
    
    
    positionX.text = "PositionX: " + player.x.toFixed(2);
    velocityX.text = "VelocityX: " + this.velocityX.toFixed(2);
    accelerationX.text = "AccelerationX: " + frameAccelerationX.toFixed(2);
    

  }

}

export default ControllerComponent;
