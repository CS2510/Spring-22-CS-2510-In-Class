import PrefabCircle from "../engine/prefabs/PrefabCircle.js";
import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import PrefabLine from "../engine/prefabs/PrefabLine.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import RocketContoller from "./RocketController.js"
import Game from "../engine/Game.js"
import Scene from "../engine/Scene.js"
import Constants from "./Constants.js";

class RocketScene extends Scene {
  static floors = 26;
  static floorSize = 69 * 20;
  constructor() {
    super();
  }
  start() {

    let feetPerSecond = Constants.rocketSpeed;
    let text = [
      "Rocket Scene",
      "You are flying up in a rocket.",
      "The rocket is flying up past platforms.",
      "The rocket's speed is " + feetPerSecond + " feet per second,",
      "or about " + Math.floor(feetPerSecond/5280*60*60) + " miles per hour--",
      "the climbing  speed of a commerical jet.",
      "Platform 69 is at " + ((Constants.platformHeight + Constants.platformMargin) * Constants.platforms).toLocaleString("en-US") + " feet,",
      "(about " + Math.floor(((Constants.platformHeight + Constants.platformMargin) * Constants.platforms)/5_280) + " miles).",
      "Push space to exit.",

    ]

    let y = 20;
    let offset = 30;
    for(let i = 0; i < text.length; i++){
      this.gameObjects.push(new PrefabTextSmall("Text", 10, y, text[i]));
      y +=offset;
    }

    this.gameObjects.push(new PrefabTextSmall("FloorIndicator", 10, y+offset*2, ""))
    this.gameObjects.push(new PrefabTextSmall("AltitudeIndicator", 10, y+offset*3, ""))
    this.gameObjects.push(new PrefabTextSmall("HigherThan", 10, y+offset*4, ""))
    this.gameObjects.push(new PrefabTextSmall("Temperature", 10, y+offset*5, ""))

    this.gameObjects.push(new PrefabCircle("Player", 0, 0, 5));

    for (let j = 0; j < Constants.platforms; j++) {
      this.gameObjects.push(new PrefabRectangle("Floor", 10, -(j+1) * (Constants.platformHeight + 10), Constants.platformHeight, Constants.platformHeight));

    }


    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new RocketContoller()));
  }
}

export default RocketScene;