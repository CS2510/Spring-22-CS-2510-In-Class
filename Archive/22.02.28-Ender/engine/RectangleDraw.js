import Component from "./Component.js"
import Rectangle from "./Rectangle.js"

class RectangleDraw extends Component{
  constructor(parent, fill, stroke){
    super(parent)
    this.fill = fill || "#FF00FF";
    this.stroke = stroke || "#FFFF00";
  }
  draw(ctx){
    //Find my sibling rectangle
    let rectangle = this.parent.getComponent(Rectangle);
    ctx.beginPath();
    ctx.rect(
      rectangle.x,
      rectangle.y,
      rectangle.w,
      rectangle.h
    )
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.stroke;
    ctx.fill();
    ctx.stroke();
  }
}

export default RectangleDraw;