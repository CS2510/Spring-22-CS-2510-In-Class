import GameObject from "../engine/GameObject.js"
import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";
import CollisionPointUpdateComponent from "./CollisionPointUpdateComponent.js";

class CollisionPointGameObject extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Point(this, x,y));
    this.components.push(new PointDraw(this, "magenta", "transparent"));
    this.components.push(new CollisionPointUpdateComponent(this))
    
  }
}

export default CollisionPointGameObject;