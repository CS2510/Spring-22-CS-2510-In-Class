import Point from "./Point.js"
import Circle from "./Circle.js"
import Rectangle from "./Rectangle.js"
import MathPoint from "./math/Point.js";
import MathLine from "./math/Line.js";

class Collisions {
  static inCollision(one, two) {
    if (one instanceof Point) {
      //Point/Point
      if (two instanceof Point) {
        return one.x == two.x && one.y == two.y;
      }
      //Point/AAR
      if (two instanceof Rectangle) {
        return one.x > two.x && one.x < two.x + two.w && one.y > two.y && one.y < two.y + two.h;
      }
      //Point/Circle
      if (two instanceof Circle) {
        let length = Math.sqrt((one.x - two.x) ** 2 + (one.y - two.y) ** 2);
        return length < two.r;
      }
    }
    else if (one instanceof Rectangle) {
      //AAR/Point
      if (two instanceof Point) {
        return Collisions.inCollision(two, one);
      }
      //AAR/AAR
      if (two instanceof Rectangle) {
        let outside = one.x > two.x + two.w || //Two is left of one
          one.x + one.w < two.x || //Two is right of one
          one.y > two.y + two.h || //Two is below one
          one.y + one.h < two.y; //Two is above one
        return !outside
      }
      //AAR/Circle
      if (two instanceof Circle) {
        //Use the separate axis theorem
        let rectangleCenter = new MathPoint(one.x+one.w/2, one.y+one.h/2);
        let circleCenter = new MathPoint(two.x, two.y);
        //Handle the circle

        let circleMin = -two.r;
        let circleMax = two.r;


        //Handle the rectangle vertices
        let centersVector = rectangleCenter.minus(circleCenter);

        let vert1 = rectangleCenter.plus(new MathPoint(
          one.w / 2,
          one.h / 2));

        let vert1FromCircleCenter = vert1.minus(circleCenter);
        let projection1 = vert1FromCircleCenter.dot(centersVector.normalized());
        vert1 = circleCenter.plus(centersVector.normalized().scale(projection1));

        let vert2 = rectangleCenter.plus(new MathPoint(
          one.w / 2,
          -one.h / 2));

        let vert2FromCircleCenter = vert2.minus(circleCenter);
        let projection2 = vert2FromCircleCenter.dot(centersVector.normalized());
        vert2 = circleCenter.plus(centersVector.normalized().scale(projection2));


        let vert3 = rectangleCenter.plus(new MathPoint(
          -one.w / 2,
          -one.h / 2));

        let vert3FromCircleCenter = vert3.minus(circleCenter);
        let projection3 = vert3FromCircleCenter.dot(centersVector.normalized());
        vert3 = circleCenter.plus(centersVector.normalized().scale(projection3));

        let vert4 = rectangleCenter.plus(new MathPoint(
          -one.w / 2,
          one.h / 2));


        let vert4FromCircleCenter = vert4.minus(circleCenter);
        let projection4 = vert4FromCircleCenter.dot(centersVector.normalized());
        vert4 = circleCenter.plus(centersVector.normalized().scale(projection4));

        let minProject = Math.min(...[projection1, projection2, projection3, projection4]);
        let maxProject = Math.max(...[projection1, projection2, projection3, projection4]);

        console.log(minProject + " " + maxProject)

        //Now check if we are outside
        if(maxProject < circleMin || minProject > circleMax) return false;
        return true;











      }
    }
    else if (one instanceof Circle) {
      //Circle/Point
      if (two instanceof Point) {
        return Collisions.inCollision(two, one);
      }
      //Circle/Circle
      if (two instanceof Circle) {
        let combinedRadius = one.r + two.r;
        let distance = Math.sqrt((one.x - two.x) ** 2 + (one.y - two.y) ** 2);
        return distance < combinedRadius;
      }
      //Circle/AAR
      if (two instanceof Rectangle) {
        return Collisions.inCollision(two, one);
      }
    }
  }

}

export default Collisions;