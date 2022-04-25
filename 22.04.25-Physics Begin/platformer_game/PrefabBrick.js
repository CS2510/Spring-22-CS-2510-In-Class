import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import BrickController from "./BrickController.js";

// A simple brick the player can land on
class PrefabBrick extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = "brown"
    this.components.push(new BrickController(this));
  }
}

export default PrefabBrick;