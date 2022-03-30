import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

class Collider extends Component {
  constructor(parent) {
    super(parent);

    this.biggerCircleGameObject = Game.findByNameOne("BiggerCircle");
    

    this.collisionCircleGameObject = Game.findByNameOne("Circle");
    this.collisionRectangleGameObject = Game.findByNameOne("Rectangle");
    this.circleDebugLineGameObject = Game.findByNameOne("CircleDebugLine");

    this.dynamicPointGameObject = Game.findByNameOne("DynamicPoint");
    this.dynamicCircleGameObject = Game.findByNameOne("DynamicCircle");
    this.dynamicRectangleGameObject = Game.findByNameOne("DynamicRectangle");

    this.collisionCircle = this.collisionCircleGameObject.getComponent("Circle");
    this.collisionRectangle = this.collisionRectangleGameObject.getComponent("Rectangle");
    this.circleDebugLine = this.circleDebugLineGameObject.getComponent("Line");
    
    this.dynamicPoint = this.dynamicPointGameObject.getComponent("Point");
    this.dynamicCircle = this.dynamicCircleGameObject.getComponent("Circle");
    this.dynamicRectangle = this.dynamicRectangleGameObject.getComponent("Rectangle");

    this.collisionCircleDraw = this.collisionCircleGameObject.getComponent("CircleDraw");
    this.collisionRectangleDraw = this.collisionRectangleGameObject.getComponent("RectangleDraw");
    this.state = "Circle";
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
      this.dynamicPointGameObject.visible = true;
      this.dynamicCircleGameObject.visible = false;
      this.dynamicRectangleGameObject.visible = false;
      this.biggerCircleGameObject.visible = false;
      
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.dynamicPoint.x;
      this.circleDebugLine.y2 = this.dynamicPoint.y;

      if (Collisions.inCollision(this.collisionCircle, this.dynamicPoint)) {
        this.collisionCircleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.dynamicPoint)) {
        this.collisionRectangleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
    }
    if (this.state == "Circle") {
      this.dynamicPointGameObject.visible = false;
      this.dynamicCircleGameObject.visible = true;
      this.dynamicRectangleGameObject.visible = false;
      this.biggerCircleGameObject.visible = true;
      
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.dynamicCircle.x;
      this.circleDebugLine.y2 = this.dynamicCircle.y;

      if (Collisions.inCollision(this.collisionCircle, this.dynamicCircle)) {
        this.collisionCircleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.dynamicCircle)) {
        this.collisionRectangleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
    }
    if (this.state == "Rectangle") {
      this.dynamicPointGameObject.visible = false;
      this.dynamicCircleGameObject.visible = false;
      this.dynamicRectangleGameObject.visible = true;
      this.biggerCircleGameObject.visible = false;
      
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.dynamicRectangle.x;
      this.circleDebugLine.y2 = this.dynamicRectangle.y;

      if (Collisions.inCollision(this.collisionCircle, this.dynamicRectangle)) {
        this.collisionCircleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.dynamicRectangle)) {
        this.collisionRectangleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
    }






  }
}

export default Collider;
