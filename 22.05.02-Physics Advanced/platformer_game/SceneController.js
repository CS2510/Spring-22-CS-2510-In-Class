import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";


class SceneController extends Component {
  constructor(parent) {
    super(parent);
    this.firstUpdate = true;


  }
  update(ctx) {

    let text = [
      "Different approaches to platform physics",
      "Push 1 for simple below collisions.",
      "Push 2 for naive directional collisions.",
      "Push 3 for angle-based collisions.",
      //"Push 4 for quad-based collisions.",

      
    ]



    if (this.firstUpdate) {
      for(let i = 0 ; i < text.length; i++){
        let numbers = new PrefabTextSmall(text[i],500, 20+30*i, text[i])
        Game.scene().gameObjects.push(numbers)
      }
    }


    this.firstUpdate = false;
    if (Input.getKeyDown("1")) {
      Game.changeScene(0);
    }
    if (Input.getKeyDown("2")) {
      Game.changeScene(1);
    }
    if (Input.getKeyDown("3")) {
      Game.changeScene(2);
    }
    if (Input.getKeyDown("4")) {
      Game.changeScene(3);
    }

  }

}



export default SceneController;
