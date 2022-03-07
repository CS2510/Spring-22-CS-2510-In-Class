class RectangleDrawComponent extends Component {
  constructor(parent) {
    super(parent);
  }
  draw(ctx) {
    let updateComponent = this.parent.components.find(c=>c instanceof RectangleUpdateComponent);
    
    ctx.fillStyle = `rgb(${updateComponent.r},${updateComponent.g},${updateComponent.b})`
    ctx.strokeStyle = "white"

    ctx.beginPath()
    ctx.rect(
      updateComponent.x,
      updateComponent.y,
      updateComponent.w,
      updateComponent.h
    )
    ctx.fill();
    ctx.stroke();
  }
}