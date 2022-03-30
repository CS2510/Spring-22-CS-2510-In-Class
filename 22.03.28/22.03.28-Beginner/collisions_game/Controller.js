import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

class Collider extends Component {
  constructor(parent) {
    super(parent);
    this.collisionCircleGameObject = Game.findByNameOne("Circle");
    this.collisionRectangleGameObject = Game.findByNameOne("Rectangle");
    this.circleDebugLineGameObject = Game.findByNameOne("CircleDebugLine");
    
    this.collisionPointGameObject = Game.findByNameOne("DynamicPoint");

    this.collisionCircle = this.collisionCircleGameObject.getComponent("Circle");
    this.collisionRectangle = this.collisionRectangleGameObject.getComponent("Rectangle");
    this.circleDebugLine = this.circleDebugLineGameObject.getComponent("Line");
    
    this.collisionPoint = this.collisionPointGameObject.getComponent("Point");

    this.collisionCircleDraw = this.collisionCircleGameObject.getComponent("CircleDraw");
    this.collisionRectangleDraw = this.collisionRectangleGameObject.getComponent("RectangleDraw");
    this.state = "Point";
  }
  update() {
    if(Input.getKeyDown("1")){
      console.log("Changing to 1")
      this.state = "Point"
    }
    if(Input.getKeyDown("2")){
      console.log("Changing to 2")
      this.state = "Circle"
    }
    if(Input.getKeyDown("3")){
      console.log("Changing to 3")
      this.state = "Rectangle"
    }




    if (this.state == "Point") {
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.collisionPoint.x;
      this.circleDebugLine.y2 = this.collisionPoint.y;

      if (Collisions.inCollision(this.collisionCircle, this.collisionPoint)) {
        this.collisionCircleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.collisionPoint)) {
        this.collisionRectangleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
    }
    if (this.state == "Circle") {
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.collisionPoint.x;
      this.circleDebugLine.y2 = this.collisionPoint.y;

      if (Collisions.inCollision(this.collisionCircle, this.collisionPoint)) {
        this.collisionCircleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.collisionPoint)) {
        this.collisionRectangleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
    }






  }
}

export default Collider;
