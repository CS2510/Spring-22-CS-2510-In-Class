import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import ControllerComponent from "./QuadController.js"
import SceneController from "./SceneController.js"
import Scene from "../engine/Scene.js"
import Game from "../engine/Game.js"

import PrefabBrick from "./PrefabBrickQuad.js"
import PrefabLine from "../engine/prefabs/PrefabLine.js";

class MainScene extends Scene{
  constructor(){
    super();
  }
  start(){

    //Add a title
    this.gameObjects.push(new PrefabTextSmall("PlatformerTitle", 10, 20, "Simple Platformer Game - Space to Jump"))
    
    //Keep track of the physics in y
    this.gameObjects.push(new PrefabTextSmall("PositionTextY", 10, 60, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextY", 10, 80, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextY", 10, 100, ""))

    //Keep track of the physics in x
    this.gameObjects.push(new PrefabTextSmall("PositionTextX", 10, 140, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextX", 10, 160, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextX", 10, 180, ""))

    this.gameObjects.push(new PrefabTextSmall("Seconds", 10, 240, ""))


    //Create the player
    this.gameObjects.push(new PrefabRectangle("Player", -21, 8, 10, 10));

    //Create the level by adding bricks
    this.gameObjects.push(new PrefabBrick("PrefabBrick", -20, 20, 40, 10)); //One below the player
    this.gameObjects.push(new PrefabBrick("PrefabBrick", 20, 10, 40, 10)); //One directly to the right of the player
    this.gameObjects.push(new PrefabBrick("PrefabBrick", -60, 10, 40, 10)); //One directly to the left of the player
    this.gameObjects.push(new PrefabBrick("PrefabBrick", 60, 20, 40, 10)); //Right-most brick
    
    //Create the bricks above
    this.gameObjects.push(new PrefabBrick("PrefabBrick", -20, -20, 50, 10));
    // this.gameObjects.push(new PrefabBrick("PrefabBrick", 60, -10, 10, 10));


    
    
    //Add the controller to the scene
    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ControllerComponent()));

    this.gameObjects.push(new PrefabEmpty("SceneController").addComponent(new SceneController()));

    
  }
}

export default MainScene;