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
    this.badRectangleSpeed = 20;
    this.timeSinceLastCircle = 1;

    this.timeBetweenCircles = 1;
    this.circleHalfRange = 200;

    this.playing = 0;
    this.dying = 1;
    this.state = this.playing;

    this.dyingTime = 0;
  }
  update() {

    if (this.state == this.playing) {
      //Update the counter for appearing objects
      this.timeSinceLastCircle += Time.secondsBetweenFrame;
      if (this.timeSinceLastCircle > this.timeBetweenCircles) {
        this.timeSinceLastCircle -= this.timeBetweenCircles; //Don't clamp to zero to account for timing errors

        let x = this.circleHalfRange * (Math.random() * 2 - 1);
        let y = this.circleHalfRange * (Math.random() * 2 - 1);
        let go = new PrefabCircle("Circle", x, y, 20);
        go.layer = -2;
        Game.instantiate(go)
        go.getComponent("CircleDraw").fillStyle = "green";

      }


      let ticksGameObject = Game.findByNameOne("Ticks");
      let ticks = ticksGameObject.getComponent("Text");
      let time = parseFloat(ticks.text) + Time.secondsBetweenFrame;
      time = Math.ceil(time * 100) / 100;
      ticks.text = time;

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

      //Adjust the camera's position to follow the player
      Game.cameraX = Math.min(100, Math.max(-100, playerCircle.x));
      Game.cameraY = Math.min(100, Math.max(-100,playerCircle.y));

      //Adjust the camera scale

      //Game.cameraScale = 1;
      if (Input.getKey("1"))
        Game.cameraScale = 1;
      if (Input.getKey("2"))
        Game.cameraScale = 2;
      if (Input.getKey("3"))
        Game.cameraScale = .5;

      //Look for collisions
      let circles = Game.findByName("Circle");
      for (let circle of circles) {
        if (Collisions.inCollision(playerCircle, circle.getComponent("Circle"))) {
          circle.markForDelete = true;
          ticks.text = parseInt(ticks.text) + 50;
        }
      }

      //Update bad rectangle
      let badRectangleGameObject = Game.findByNameOne("BadRectangle");
      let badRectangle = badRectangleGameObject.getComponent("Rectangle");

      diffX = 0;
      diffY = 0;
      let offsetToPlayer = new mathPoint(playerCircle.x - badRectangle.x, playerCircle.y - badRectangle.y);
      offsetToPlayer = offsetToPlayer.normalized();
      let angleToPlayer = Math.atan2(offsetToPlayer.y, offsetToPlayer.x);
      diffX += Math.cos(angleToPlayer) * Time.secondsBetweenFrame * this.badRectangleSpeed;
      diffY += Math.sin(angleToPlayer) * Time.secondsBetweenFrame * this.badRectangleSpeed;

      //Or...
      // diffX = offsetToPlayer.x * Time.secondsBetweenFrame *this.badRectangleSpeed;
      // diffY = offsetToPlayer.y * Time.secondsBetweenFrame *this.badRectangleSpeed;

      badRectangle.x += diffX;
      badRectangle.y += diffY;

      this.badRectangleSpeed += Time.secondsBetweenFrame;

      if (Collisions.inCollision(badRectangle, playerCircle)) {
        this.state = this.dying;
        this.dyingTimer = 0;
        Game.scene().fillColor = "red"
        Game.findByNameOne("PauseInstructions").visible = false;

      }
    }
    else {
      //this.state == this.dying
      if (Game.findByNameOne("Circle")) {
        Game.findByNameOne("Circle").markForDelete = true;
      }
      this.dyingTime += Time.secondsBetweenFrame;
      console.log(this.dyingTime);
      if (this.dyingTime > 3) {

        Game.changeScene(0);
      }
    }



  }
}

export default ControllerComponent;
