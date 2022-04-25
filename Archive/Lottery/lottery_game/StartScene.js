import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import MainController from "./MainController.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"
import StartController from "./StartController.js";

class MainScene extends Scene{
  constructor(){
    super();
  }
  start(){

  
    let text = [
      "'Lottery' Game",
      "This game simulates a world that shows the odds of winning the lottery.",
      "In this game, there is a safe for every possible lottery ticket number.",
      "The safes are stored on the floors of buildings.",
      "Each floor has safes arranged in 69 rows and 26 columns.",
      "The floors are in buildings, each 69 stories tall.",
      "Each building is on a platform.",
      "Each platform has buildings arranged into 69 rows and 69 columns.",
      "",
      "You begin the game by flying up in a rocket.",
      "When you want to stop at a platform, you can push space.",
      "",
      "Push space to begin",
      
    ]

    for(let i = 0; i < text.length; i++){
      this.gameObjects.push(new PrefabTextSmall("Text", 10, i * 30 + 40, text[i]))
    }

    

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new StartController()));
  }
}

export default MainScene;