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
        let outside =  one.x > two.x + two.w || //Two is left of one
         one.x  + one.w < two.x || //Two is right of one
         one.y > two.y + two.h || //Two is below one
         one.y + one.h < two.y ; //Two is above one
        return !outside
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
      if(two instanceof Circle){
        let combinedRadius = one.r + two.r;
        let distance = Math.sqrt((one.x - two.x)**2+(one.y-two.y)**2);
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