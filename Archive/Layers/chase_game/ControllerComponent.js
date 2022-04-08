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
    this.circleRange = 400;
  }
  update() {

    //Update the counter for appearing objects
    this.timeSinceLastCircle += Time.secondsBetweenFrame;
    if (this.timeSinceLastCircle > this.timeBetweenCircles) {
      this.timeSinceLastCircle -= this.timeBetweenCircles; //Don't clamp to zero to account for timing errors

      let x = this.circleRange * Math.random();
      let y = this.circleRange * Math.random();
      let go = new PrefabCircle("Circle", x, y, 20);
      Game.instantiate(go)
      go.getComponent("CircleDraw").fillStyle = "green";

    }


    let ticksGameObject = Game.findByNameOne("Ticks");
    let ticks = ticksGameObject.getComponent("Text");
    ticks.text = parseInt(ticks.text) + 1;

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

    if (playerCircle.x + diffX > 0 + playerCircle.r &&
      playerCircle.x + diffX + playerCircle.r < this.circleRange &&
      playerCircle.y + diffY > playerCircle.r &&
      playerCircle.y + diffY + playerCircle.r < this.circleRange) {
      playerCircle.x += diffX;
      playerCircle.y += diffY;
    }

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

    if(Collisions.inCollision(badRectangle, playerCircle)){
      Game.changeScene(0);
    }



  }
}

export default ControllerComponent;