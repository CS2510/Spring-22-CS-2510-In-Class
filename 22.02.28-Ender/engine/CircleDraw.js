import Component from "./Component.js"
import Circle from "./Circle.js"

class CircleDraw extends Component{
  constructor(parent, fill, stroke){
    super(parent)
    this.fill = fill || "#FF00FF";
    this.stroke = stroke || "#FFFF00";
  }
  draw(ctx){
    //Find my sibling rectangle
    let circle = this.parent.getComponent(Circle);
    ctx.beginPath();
    ctx.arc(
      circle.x,
      circle.y,
      circle.r,
      0, Math.PI*2
    )
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.stroke;
    ctx.fill();
    ctx.stroke();
  }
}

export default CircleDraw;