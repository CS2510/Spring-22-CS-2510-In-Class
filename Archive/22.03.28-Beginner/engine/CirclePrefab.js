import Prefab from "./Prefab.js";
import Circle from "./Circle.js";
import CircleDraw from "./CircleDraw.js";

class CirclePrefab extends Prefab{
    constructor(name, x,y,r,fillColor,strokeColor,components=[]){
        super(name);
        this.components.push(new Circle(this, x,y,r))
        this.components.push(new CircleDraw(this, fillColor, strokeColor))
        this.addComponents(components);
    }

}

export default CirclePrefab;