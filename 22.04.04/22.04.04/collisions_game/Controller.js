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

    let gameObjectNames = [
      "CollisionCircle",
      "CircleDebugLine",
      "InnerCircle",
      "InnerCircle2",
      "DynamicPoint",
      "DynamicCircle",
      "DynamicRectangle",
      "CollisionRectangle"
    ];

    this.gameObjects = [];
    for (let gameObjectName of gameObjectNames) {
      let name = gameObjectName[0].toLowerCase() + gameObjectName.substring(1);
      let go = Game.findByNameOne(gameObjectName);

      this[name + "GameObject"] = go;
      this[name] = go.components[0];

      let draw = go.components[1];
      this[name + "Draw"] = draw;
    }


   this.separateCircle1 = this.separates[0].getComponent("Circle");
    this.separateCircle2 = this.separates[1].getComponent("Circle");

    this.rectangleSeparates = [
      this.separates[2].getComponent("Circle"),
      this.separates[3].getComponent("Circle"),
      this.separates[4].getComponent("Circle"),
      this.separates[5].getComponent("Circle"),
    ]


    this.state = "Rectangle2";
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

    let pointGameObjectVisibility = [true, false, false, false];
    let circleGameObjectVisibility = [false, true, false, false];
    let rectangleGameObjectVisibility = [false, false, true, true];
    let collisionRectangleGameObjectVisibility = [true, false, true, true];
    let biggerCircleGameObjectVisibility = [false, true, false, false];
    let rectangleBoundsVisibility = [true, false, true, true];
    let separatesVisibility = [false, false, true, false];
    let innerCircleVisibility = [false, false, false, true];
    let circleDebugLineGameObjectVisibility = [true, true, true, false];

    let indeces = {
      "Point": 0,
      "Circle": 1,
      "Rectangle": 2,
      "Rectangle2": 3
    }


    //Update visibility
    this.dynamicPointGameObject.visible = pointGameObjectVisibility[indeces[this.state]];
    this.dynamicCircleGameObject.visible = circleGameObjectVisibility[indeces[this.state]];
    this.dynamicRectangleGameObject.visible = rectangleGameObjectVisibility[indeces[this.state]];
    this.collisionRectangleGameObject.visible = collisionRectangleGameObjectVisibility[indeces[this.state]];
    this.biggerCircleGameObject.visible = biggerCircleGameObjectVisibility[indeces[this.state]];
    this.innerCircleGameObject.visible = innerCircleVisibility[indeces[this.state]];
    this.innerCircle2GameObject.visible = innerCircleVisibility[indeces[this.state]];
    this.circleDebugLineGameObject.visible = circleDebugLineGameObjectVisibility[indeces[this.state]];

    this.rectangleBounds.forEach(i => i.visible = rectangleBoundsVisibility[indeces[this.state]])
    this.separates.forEach(i => i.visible = separatesVisibility[indeces[this.state]]);




    if (this.state == "Point") {
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





      if (Collisions.inCollisionForceCirclesInner(this.collisionCircle, this.dynamicRectangle)) {
        this.collisionCircleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionCircleDraw.strokeStyle = "red";
      }

      if (Collisions.inCollisionForceCirclesInner(this.collisionRectangle, this.dynamicRectangle)) {
        this.collisionRectangleDraw.strokeStyle = "yellow";
      }
      else {
        this.collisionRectangleDraw.strokeStyle = "red";
      }
    }






  }
}

export default Collider;
