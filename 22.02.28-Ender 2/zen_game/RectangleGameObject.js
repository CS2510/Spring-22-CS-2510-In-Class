import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import Rectangle from "../engine/Rectangle.js";

class RectangleGameObject extends GameObject{
  constructor(x,y,w,h,r,g,b,percent){
    super();
    this.components.push(new Rectangle(this,x,y,w,h));
    this.components.push(new RectangleDraw(this, `rgb(${r},${g},${b})`, "white"));
    this.components.push(new RectangleUpdateComponent(this, percent));
  }
  
}

export default RectangleGameObject;