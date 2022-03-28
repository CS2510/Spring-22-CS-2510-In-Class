import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Constants from "./Constants.js"
import Input from "../engine/Input.js"

class PaddleUpdateComponent extends Component {
    constructor(parent) {
        super(parent);
        this.speed = 50;

    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");

        let walls = Game.findByName("Wall");

        let minX = Math.min(...walls.map(w => w.getComponent("Rectangle").x))
        let minY = Math.min(...walls.map(w => w.getComponent("Rectangle").y))
        let maxX = Math.max(...walls.map(w => w.getComponent("Rectangle").x))
        let maxY = Math.max(...walls.map(w => w.getComponent("Rectangle").y + Constants.wallLength))


        let proposedX = rectangle.x;
        if (Input.getKey("ArrowLeft")) {
            proposedX = rectangle.x - (Time.secondsBetweenFrame * this.speed);
        }
        if (Input.getKey("ArrowRight")) {
            proposedX = rectangle.x + (Time.secondsBetweenFrame * this.speed);
        }

        if (proposedX < minX + Constants.wallWidth || proposedX > maxX -  rectangle.w) {

        }
        else {
            rectangle.x = proposedX;
        }

    }
}

export default PaddleUpdateComponent;
