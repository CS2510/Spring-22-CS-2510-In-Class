import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";

class PrefabGround extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = "brown"
  }

}

export default PrefabGround;