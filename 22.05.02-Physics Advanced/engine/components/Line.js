import Component from "../Component.js"

class Line extends Component {
    constructor(parent, x, y, x2, y2) {
        super(parent);
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
    }
    length(){
        return Math.sqrt((this.x - this.x2)**2 + (this.y - this.y2)**2);
    }

}

export default Line