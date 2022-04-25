import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import ControllerComponent from "./ControllerComponent.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"

class MainScene extends Scene{
  constructor(){
    super();
  }
  start(){

  
    this.gameObjects.push(new PrefabTextSmall("Title", 10, 20, "Lottery Game"))
    

    this.gameObjects.push(new PrefabCircle("Player", 0, 0, 10));

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ControllerComponent()));
  }
}

export default MainScene;