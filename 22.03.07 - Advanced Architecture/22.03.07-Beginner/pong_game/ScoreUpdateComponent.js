import Component from "../engine/Component.js"




class ScoreUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.ticks = 0;
  }
  update() {

    let text = this.parent.getComponent("Text");
  
    text.text = this.ticks;
    this.ticks++;
  }
}

export default ScoreUpdateComponent;