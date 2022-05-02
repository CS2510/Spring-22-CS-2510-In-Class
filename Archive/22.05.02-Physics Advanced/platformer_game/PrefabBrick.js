import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import BrickController from "./BrickController.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js"

// A simple brick the player can land on
class PrefabBrick extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);

    let lineWidth = .25;
    let line = new PrefabLine("Debugging Line", x, y, x+w, y+h);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "yellow";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));

    line = new PrefabLine("Debugging Line", x, y+h, x+w, y);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "yellow";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));

    line = new PrefabLine("Follow Line", x+w/2, y+h/2, 0, 0);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "white";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = "brown"
    this.components.push(new BrickController(this));

  }
}

export default PrefabBrick;