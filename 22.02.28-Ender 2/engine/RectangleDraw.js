import Component from "./Component.js"

class RectangleDraw extends Component{
  constructor(parent, fillStyle, strokeStyle){
    super(parent);
    this.fillStyle = fillStyle;
    this.storkeStyle = strokeStyle
  }
  draw(ctx){
    let rectangle = parent.getComponent("Rectangle");
    ctx.beginPath();
    ctx.rect(
      rectangle.x,
      rectangle.y,
      rectangle.w,
      rectangle.h
    )
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.fill();
    ctx.stroke();
  }
}

export default RectangleDraw;