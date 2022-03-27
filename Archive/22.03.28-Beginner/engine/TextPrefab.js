import Prefab from "./Prefab.js";
import Text from "./Text.js";
import TextDraw from "./TextDraw.js";

class TextPrefab extends Prefab{
    constructor(name, x,y,text,font,fillColor,strokeColor,components=[]){
        super(name);
        this.components.push(new Text(this, x,y,text,font))
        this.components.push(new TextDraw(this, fillColor, strokeColor))
        this.addComponents(components);
    }

}

export default TextPrefab;