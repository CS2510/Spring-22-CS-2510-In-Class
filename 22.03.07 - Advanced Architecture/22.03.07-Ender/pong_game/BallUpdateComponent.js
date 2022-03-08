import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"

class BallUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velX = 15;
    this.velY = 25;
    
  }
  update() {

    let circle = this.parent.getComponent("Circle");
    let r = circle.r;

    //Get the walls
    let walls = Game.findByType("WallGameObject");
    
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;

    
     

    // for(let wall of walls){
    //   let component = wall.getComponent("Rectangle")
    //   if(component.x < minX)
    //     minX = component.x
    //   if(component.y < minY)
    //     minY = component.y
    //   if(component.x > maxX)
    //     maxX = component.x
    //   if(component.y > maxY)
    //     maxY = component.y
    // }

    minX = Math.min(...walls.map(w=>w.getComponent("Rectangle").x))
    minY = Math.min(...walls.map(w=>w.getComponent("Rectangle").y))
    maxX = Math.max(...walls.map(w=>w.getComponent("Rectangle").x))
    maxY = Math.max(...walls.map(w=>w.getComponent("Rectangle").y))


    console.log("found " + minX + ", " + minY + " " + maxX + ", " + maxY );
    
    

    
    let x = circle.x;
    let y = circle.y;

    if(x - r <= minX + 10 || x + r >= maxX )
      this.velX *= -1;
    if(y -r  <= minY + 10 || y + r >= maxY)
      this.velY *= -1;
    circle.x += this.velX * Time.secondsBetweenFrame;
    circle.y += this.velY * Time.secondsBetweenFrame;
  }
}

export default BallUpdateComponent;