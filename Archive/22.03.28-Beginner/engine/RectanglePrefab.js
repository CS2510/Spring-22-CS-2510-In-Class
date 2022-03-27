import Prefab from "./Prefab.js";
import Rectangle from "./Rectangle.js";
import RectangleDraw from "./RectangleDraw.js";

class PaddleGameObject extends Prefab{
    constructor(x,y,w,h,fillColor,strokeColor,components=[]){
        super();
        this.components.push(new Rectangle(this, x,y,w,h))
        this.components.push(new RectangleDraw(this, fillColor, strokeColor))
        this.addComponents(components);
    }

}

export default PaddleGameObject;