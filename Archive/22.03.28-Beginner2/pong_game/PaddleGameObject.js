import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import Constants from "./Constants.js";
import PaddleUpdateComponent from "./PaddleUpdateComponent.js";

class PaddleGameObject extends GameObject{
    constructor(px,py,w){
        super("Paddle");
        this.components.push(new Rectangle(this, px,py,w,Constants.wallWidth))
        this.components.push(new RectangleDraw(this, "purple", "yellow"))
        this.components.push(new PaddleUpdateComponent(this));
    }

}

export default PaddleGameObject;