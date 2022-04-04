import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import MathPoint from "../engine/math/Point.js"
import MathLine from "../engine/math/Line.js"
import Line from "../engine/Line.js";
import Point from "../engine/Point.js";

class Collider extends Component {
  constructor(parent) {
    super(parent);

    this.biggerCircleGameObject = Game.findByNameOne("BiggerCircle");
    this.rectangleBounds = [
      Game.findByNameOne("RectangleLeftBoundary"),
      Game.findByNameOne("RectangleRightBoundary"),
      Game.findByNameOne("RectangleTopBoundary"),
      Game.findByNameOne("RectangleBottomBoundary"),
    ];
    this.separates = [
      Game.findByNameOne("CircleSeparate1"),
      Game.findByNameOne("CircleSeparate2"),
      Game.findByNameOne("RectangleSeparate1"),
      Game.findByNameOne("RectangleSeparate2"),
      Game.findByNameOne("RectangleSeparate3"),
      Game.findByNameOne("RectangleSeparate4"),
    ]
    

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
    
    this.separateCircle1 = this.separates[0].getComponent("Circle");
    this.separateCircle2 = this.separates[1].getComponent("Circle");
    this.rectangleSeparates = [
      this.separates[2].getComponent("Circle"),
      this.separates[3].getComponent("Circle"),
      this.separates[4].getComponent("Circle"),
      this.separates[5].getComponent("Circle"),
    ]
    
    
    this.state = "Rectangle";
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
      this.collisionRectangleGameObject.visible = true;
      this.biggerCircleGameObject.visible = false;
      this.rectangleBounds.forEach(i=>i.visible = true)
      this.separates.forEach(i=>i.visible = false);
      
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
      this.collisionRectangleGameObject.visible = false;
      this.rectangleBounds.forEach(i=>i.visible = false)
      this.separates.forEach(i=>i.visible = false);
      
      
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
      this.collisionRectangleGameObject.visible = true;
      this.biggerCircleGameObject.visible = false;
      this.rectangleBounds.forEach(i=>i.visible = true)
      this.separates.forEach(i=>i.visible = true);

      
      
      
      let rectangleCenterX = this.dynamicRectangle.x + this.dynamicRectangle.w/2;
      let rectangleCenterY = this.dynamicRectangle.y + this.dynamicRectangle.h/2;
      
      let rectangleCenter = new MathPoint(rectangleCenterX, rectangleCenterY);
      let circleCenter = new MathPoint(this.collisionCircle.x, this.collisionCircle.y);

      
      
      this.circleDebugLine.x = circleCenter.x;
      this.circleDebugLine.y = circleCenter.y;
      this.circleDebugLine.x2 = rectangleCenterX;
      this.circleDebugLine.y2 = rectangleCenterY;

      //Place the circles point on the line
      //By getting the equation for the line in standard form
      let deltaX = rectangleCenterX - circleCenter.x;
      let deltaY = rectangleCenterY - circleCenter.y;
      let offsetVector = new MathPoint(deltaX, deltaY);
      let length = offsetVector.length();
      let normalizedVector = offsetVector.normalized();
      let orthogonal = normalizedVector.orthogonal();


      

      let c = -(orthogonal.x * rectangleCenterX + orthogonal.y * rectangleCenterY);

      let vector = new Line(orthogonal, c);

      let separateCircleX1 = circleCenter.x + normalizedVector.x * this.collisionCircle.r;
      let separateCircleY1 = circleCenter.y + normalizedVector.y * this.collisionCircle.r;

      this.separateCircle1.x = separateCircleX1;
      this.separateCircle1.y = separateCircleY1;

      let separateCircleX2 = circleCenter.x - normalizedVector.x * this.collisionCircle.r;
      let separateCircleY2 = circleCenter.y - normalizedVector.y * this.collisionCircle.r;

      this.separateCircle2.x = separateCircleX2;
      this.separateCircle2.y = separateCircleY2;




      //Now get the rectangle vertices
      let centersVector = rectangleCenter.minus(circleCenter);
      let vert1 = rectangleCenter.plus(new MathPoint(
        this.dynamicRectangle.w/2,
         this.dynamicRectangle.h/2));

         let vert1FromCircleCenter = vert1.minus(circleCenter);
         let projection1 = vert1FromCircleCenter.dot(centersVector.normalized());
         vert1 = circleCenter.plus(centersVector.normalized().scale(projection1));



      this.rectangleSeparates[0].x = vert1.x;
      this.rectangleSeparates[0].y = vert1.y;
      
      let vert2 = rectangleCenter.plus(new MathPoint(
        this.dynamicRectangle.w/2, 
        -this.dynamicRectangle.h/2));

        let vert2FromCircleCenter = vert2.minus(circleCenter);
        let projection2 = vert2FromCircleCenter.dot(centersVector.normalized());
        vert2 = circleCenter.plus(centersVector.normalized().scale(projection2));



      this.rectangleSeparates[1].x = vert2.x;
      this.rectangleSeparates[1].y = vert2.y;

      let vert3 = rectangleCenter.plus(new MathPoint(
        -this.dynamicRectangle.w/2, 
        -this.dynamicRectangle.h/2));

        let vert3FromCircleCenter = vert3.minus(circleCenter);
         let projection3 = vert3FromCircleCenter.dot(centersVector.normalized());
         vert3 = circleCenter.plus(centersVector.normalized().scale(projection3));



      this.rectangleSeparates[2].x = vert3.x;
      this.rectangleSeparates[2].y = vert3.y;

      let vert4 = rectangleCenter.plus(new MathPoint(
        -this.dynamicRectangle.w/2, 
        this.dynamicRectangle.h/2));


        let vert4FromCircleCenter = vert4.minus(circleCenter);
         let projection4 = vert4FromCircleCenter.dot(centersVector.normalized());
         vert4 = circleCenter.plus(centersVector.normalized().scale(projection4));


      this.rectangleSeparates[3].x = vert4.x;
      this.rectangleSeparates[3].y = vert4.y;


      





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
