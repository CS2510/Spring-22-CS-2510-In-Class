import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import BrickController from "./BrickControllerQuad.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js"

// A simple brick the player can land on
class PrefabBrickQuad extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);

    let lineWidth = .25;
    let minDimension = Math.min(w,h);
    let line;

    this.center1x = x+minDimension/2;
    this.center1y = y+minDimension/2;
    this.center2x = x+w-minDimension/2;
    this.center2y = y+h-minDimension/2;


    line = new PrefabLine("Debugging Line", x, y, x+minDimension/2, y+minDimension/2);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "yellow";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));

    line = new PrefabLine("Debugging Line", x, y+h, x+minDimension/2, y+minDimension/2);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "yellow";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));

    line = new PrefabLine("Debugging Line", x+w, y, x+w-minDimension/2, y+minDimension/2);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "yellow";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));

    line = new PrefabLine("Debugging Line", x+w, y+h, x+w-minDimension/2, y+minDimension/2);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "yellow";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));

    line = new PrefabLine("Follow Line", x+w-minDimension/2, y+h/2, 0, 0);
    line.getComponent("LineDraw").lineWidth=lineWidth;
    line.getComponent("LineDraw").strokeStyle = "white";
    this.components.push(line.getComponent("Line"));
    this.components.push(line.getComponent("LineDraw"));
    
    line = new PrefabLine("Follow Line 2", x+minDimension/2, y+h/2, 0, 0);
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

export default PrefabBrickQuad;