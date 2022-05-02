import Component from "../Component.js"

class LineDraw extends Component {
    constructor(parent, strokeStyle) {
        super(parent);
        this.strokeStyle = strokeStyle;
        this.lineWidth = 5;
        this.lineCap = "round";
    }
    draw(ctx){
        let line = this.parent.getComponent("Line");
        ctx.strokeStyle = this.strokeStyle;

        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke()
    }

}

export default LineDraw