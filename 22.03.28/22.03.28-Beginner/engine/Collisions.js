import Point from "./Point.js"
import Circle from "./Circle.js"
import Rectangle from "./Rectangle.js"

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

      }
      //AAR/Circle
      if (two instanceof Circle) {

      }
    }
    else if (one instanceof Circle) {
      //Circle/Point
      if (two instanceof Point) {
        return Collisions.inCollision(two, one);
      }
      //Circle/Circle
      //Circle/AAR
      return Collisions.inCollision(two, one);
    }
  }

}

export default Collisions;