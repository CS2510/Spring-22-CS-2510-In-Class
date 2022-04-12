import Scene from "../engine/Scene.js"
import PrefabCircle from "../engine/PrefabCircle.js"
import ControllerComponent from "./ControllerComponent.js"
import PrefabTextSmall from "../engine/PrefabTextSmall.js"

class MainScene extends Scene {
  constructor() {
    super("Main Chase Scene");
  }

  start(){

    let welcomeText = new PrefabTextSmall("A chase game", 20, 20, "A chase game");
    welcomeText.layer = 1;
    this.gameObjects.push(welcomeText);


    let player = new PrefabCircle("Player", 0, 0, 20);
    player.addComponent(new ControllerComponent(player));
    player.layer = -1;
    this.gameObjects.push(player);

  }
    
}

export default MainScene;
