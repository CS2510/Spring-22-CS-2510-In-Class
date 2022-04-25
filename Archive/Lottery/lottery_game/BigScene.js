import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import BigController from "./BigController.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"

class BigScene extends Scene{
  constructor(){
    super();
  }
  start(){

    let bigSize = 69*20;

  
    this.gameObjects.push(new PrefabTextSmall("Title", 10, 20, "Big Scene"))

    this.gameObjects.push(new PrefabCircle("Player", 0, 0, 5));

    for(let i = 0; i < 69; i++){
     // this.gameObjects.push(new PrefabRectangle("Aisle", 10, i * (bigSize + 10), bigSize, bigSize));
      for(let j = 0; j < 69; j++){
        this.gameObjects.push(new PrefabRectangle("Aisle", 10 + j * (bigSize + 10), i * (bigSize + 10), bigSize, bigSize));

      }
    }

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new BigController()));
  }
}

export default BigScene;