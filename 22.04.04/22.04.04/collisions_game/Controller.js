import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import MathPoint from "../engine/math/Point.js"
import Line from "../engine/Line.js";

import Constants from "./Constants.js"
import Settings from "./Settings.js"

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

    this.rectangleBoundsVisibility = [true, false, true, true];
    this.separatesVisibility = [false, false, true, false];
    
    this.gameObjectNames = Constants;

    this.gameObjects = [];
    for (let gameObjectName of this.gameObjectNames) {
      let workingName = gameObjectName.go.name;
      let name = workingName[0].toLowerCase() + workingName.substring(1);
      let go = Game.findByNameOne(workingName);

      this[name + "GameObject"] = go;
      this[name] = go.components[0];

      let draw = go.components[1];
      this[name + "Draw"] = draw;

      this[name + "GameObjectVisibility"] = gameObjectName.visibility;
    }


    this.separateCircle1 = this.separates[0].getComponent("Circle");
    this.separateCircle2 = this.separates[1].getComponent("Circle");

    this.rectangleSeparates = [
      this.separates[2].getComponent("Circle"),
      this.separates[3].getComponent("Circle"),
      this.separates[4].getComponent("Circle"),
      this.separates[5].getComponent("Circle"),
    ]


    this.state = "Rectangle3";

    
  }
  update() {
    if (Input.getKeyDown("1")) {
      console.log("Changing to 1")
      this.state = "Point"
    }
    if (Input.getKeyDown("2")) {
      console.log("Changing to 2")
      this.state = "Circle"
    }
    if (Input.getKeyDown("3")) {
      console.log("Changing to 3")
      this.state = "Rectangle"
    }
    if (Input.getKeyDown("4")) {
      console.log("Changing to 4")
      this.state = "Rectangle2"
    }
    if (Input.getKeyDown("5")) {
      console.log("Changing to 5")
      this.state = "Rectangle3"
    }

   
    let indeces = {
      "Point": 0,
      "Circle": 1,
      "Rectangle": 2,
      "Rectangle2": 3,
      "Rectangle3": 4,
    }


    //Update visibility
    for (let gameObjectName of this.gameObjectNames) {
      let workingName = gameObjectName.go.name;
      let name = workingName[0].toLowerCase() + workingName.substring(1);
     this[name+"GameObject"].visible = this[name + "GameObjectVisibility"][indeces[this.state]];
    }
    
    this.rectangleBounds.forEach(i => i.visible = this.rectangleBoundsVisibility[indeces[this.state]])
    this.separates.forEach(i => i.visible = this.separatesVisibility[indeces[this.state]]);

    if (this.state == "Point") {
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.dynamicPoint.x;
      this.circleDebugLine.y2 = this.dynamicPoint.y;

      if (Collisions.inCollision(this.collisionCircle, this.dynamicPoint)) {
        this.collisionCircleDraw.strokeStyle = "green";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.dynamicPoint)) {
        this.collisionRectangleDraw.strokeStyle = "green";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
      if (Collisions.inCollision(this.collisionRectangle2, this.dynamicCircle)) {
        this.collisionRectangle2Draw.strokeStyle = "green";
      }
      else {
        this.collisionRectangle2Draw.strokeStyle = "red";
      }
    }
    if (this.state == "Circle") {
      this.circleDebugLine.x = this.collisionCircle.x;
      this.circleDebugLine.y = this.collisionCircle.y;
      this.circleDebugLine.x2 = this.dynamicCircle.x;
      this.circleDebugLine.y2 = this.dynamicCircle.y;

      if (Collisions.inCollision(this.collisionCircle, this.dynamicCircle)) {
        this.collisionCircleDraw.strokeStyle = "green";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      

      if (Collisions.inCollisionForceInflate(this.collisionRectangle2, this.dynamicCircle)) {
        this.collisionRectangle2Draw.strokeStyle = "green";
      }
      else {
        this.collisionRectangle2Draw.strokeStyle = "red";
      }
    }
    if (this.state == "Rectangle") {
      let rectangleCenterX = this.dynamicRectangle.x + this.dynamicRectangle.w / 2;
      let rectangleCenterY = this.dynamicRectangle.y + this.dynamicRectangle.h / 2;

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
        this.dynamicRectangle.w / 2,
        this.dynamicRectangle.h / 2));

      let vert1FromCircleCenter = vert1.minus(circleCenter);
      let projection1 = vert1FromCircleCenter.dot(centersVector.normalized());
      vert1 = circleCenter.plus(centersVector.normalized().scale(projection1));



      this.rectangleSeparates[0].x = vert1.x;
      this.rectangleSeparates[0].y = vert1.y;

      let vert2 = rectangleCenter.plus(new MathPoint(
        this.dynamicRectangle.w / 2,
        -this.dynamicRectangle.h / 2));

      let vert2FromCircleCenter = vert2.minus(circleCenter);
      let projection2 = vert2FromCircleCenter.dot(centersVector.normalized());
      vert2 = circleCenter.plus(centersVector.normalized().scale(projection2));



      this.rectangleSeparates[1].x = vert2.x;
      this.rectangleSeparates[1].y = vert2.y;

      let vert3 = rectangleCenter.plus(new MathPoint(
        -this.dynamicRectangle.w / 2,
        -this.dynamicRectangle.h / 2));

      let vert3FromCircleCenter = vert3.minus(circleCenter);
      let projection3 = vert3FromCircleCenter.dot(centersVector.normalized());
      vert3 = circleCenter.plus(centersVector.normalized().scale(projection3));



      this.rectangleSeparates[2].x = vert3.x;
      this.rectangleSeparates[2].y = vert3.y;

      let vert4 = rectangleCenter.plus(new MathPoint(
        -this.dynamicRectangle.w / 2,
        this.dynamicRectangle.h / 2));


      let vert4FromCircleCenter = vert4.minus(circleCenter);
      let projection4 = vert4FromCircleCenter.dot(centersVector.normalized());
      vert4 = circleCenter.plus(centersVector.normalized().scale(projection4));


      this.rectangleSeparates[3].x = vert4.x;
      this.rectangleSeparates[3].y = vert4.y;

      if (Collisions.inCollision(this.collisionCircle, this.dynamicRectangle)) {
        this.collisionCircleDraw.strokeStyle = "green";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle, this.dynamicRectangle)) {
        this.collisionRectangleDraw.strokeStyle = "green";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollision(this.collisionRectangle2, this.dynamicRectangle)) {
        this.collisionRectangle2Draw.strokeStyle = "green";
      }
      else {
        this.collisionRectangle2Draw.strokeStyle = "red";
      }
    }
    if (this.state == "Rectangle2") {
      let rectangleCenterX = this.dynamicRectangle.centerX();
      let rectangleCenterY = this.dynamicRectangle.centerY();

      this.innerCircle.x = rectangleCenterX;
      this.innerCircle.y = rectangleCenterY;
      this.innerCircle.r = Math.min(this.dynamicRectangle.w / 2, this.dynamicRectangle.h / 2);


      this.innerCircle2.x = this.collisionRectangle.centerX();
      this.innerCircle2.y = this.collisionRectangle.centerY();
      this.innerCircle2.r = Math.min(
        this.collisionRectangle.w / 2,
        this.collisionRectangle.h / 2
      );

      this.innerCircle3.x = this.collisionRectangle2.centerX();
      this.innerCircle3.y = this.collisionRectangle2.centerY();
      this.innerCircle3.r = Math.min(
        this.collisionRectangle2.w / 2,
        this.collisionRectangle2.h / 2
      );

      if (Collisions.inCollisionForceCirclesInner(this.collisionCircle, this.dynamicRectangle)) {
        this.collisionCircleDraw.strokeStyle = "green";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollisionForceCirclesInner(this.collisionRectangle, this.dynamicRectangle)) {
        this.collisionRectangleDraw.strokeStyle = "green";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollisionForceCirclesInner(this.collisionRectangle2, this.dynamicRectangle)) {
        this.collisionRectangle2Draw.strokeStyle = "green";
      }
      else {
        this.collisionRectangle2Draw.strokeStyle = "red";
      }
    }
    if (this.state == "Rectangle3") {
      let rectangleCenterX = this.dynamicRectangle.centerX();
      let rectangleCenterY = this.dynamicRectangle.centerY();
      let radius = Settings.collisionCircleRadius;
      let w = this.dynamicRectangle.w/2;
      let h = this.dynamicRectangle.h/2;

      this.cornerCircleUL.x = rectangleCenterX - w;
      this.cornerCircleUL.y = rectangleCenterY - h;
      this.cornerCircleUL.r = radius;

      this.cornerCircleUR.x = rectangleCenterX + w;
      this.cornerCircleUR.y = rectangleCenterY - h;
      this.cornerCircleUR.r = radius;


      this.cornerCircleLR.x = rectangleCenterX + w;
      this.cornerCircleLR.y = rectangleCenterY + h;
      this.cornerCircleLR.r = radius;


      this.cornerCircleLL.x = rectangleCenterX - w;
      this.cornerCircleLL.y = rectangleCenterY + h;
      this.cornerCircleLL.r = radius;

      this.multiplesRectangle1.x = this.dynamicRectangle.x -w ;
      this.multiplesRectangle1.y = this.dynamicRectangle.y;
      this.multiplesRectangle1.w = this.dynamicRectangle.w + w * 2;
      this.multiplesRectangle1.h = this.dynamicRectangle.h;

      
      this.multiplesRectangle2.x = this.dynamicRectangle.x;
      this.multiplesRectangle2.y = this.dynamicRectangle.y - h;
      this.multiplesRectangle2.w = this.dynamicRectangle.w;
      this.multiplesRectangle2.h = this.dynamicRectangle.h + h*2;

      

      

      if (Collisions.inCollisionForceMultiples(this.collisionCircle, this.dynamicRectangle)) {
        this.collisionCircleDraw.strokeStyle = "green";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      
    }






  }
}

export default Collider;
