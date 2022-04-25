import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"
import ElevatorScene from "./ElevatorScene.js";
import Constants from "./Constants.js"


class RocketContoller extends Component {
  constructor(parent) {
    super(parent);
    this.speed = Constants.rocketSpeed;


  }
  update(ctx) {
    let playerGameObject = Game.findByNameOne("Player");
    let player = playerGameObject.getComponent("Circle");

    let heights = [
      {name:"Sea Level", height:0},
      {name:"Low Culumus Clouds", height:1_000},
      {name:"The Tallest Skyscraper", height:2_717},
      {name:"The Tree Line", height:4_800},
      {name:"High Culumus Clouds", height:5_000},
      {name:"Denver", height:5_279},
      {name:"Mount Everest", height:29_032},
      {name:"Jet Cruising Height", height:35_000},
      {name:"Highest Flying Birds", height:37_000},
      {name:"Troposphere", height:39_600},
    ]

    //57_000 feet is the max

    


    player.y -= this.speed * Time.secondsBetweenFrame;
    
    Game.cameraX = player.x;
    Game.cameraY = player.y;

    let floorIndicatorGameObject = Game.findByNameOne("FloorIndicator");
    let floorIndicator = floorIndicatorGameObject.getComponent("Text")
    let altitudeIndicatorGameObject = Game.findByNameOne("AltitudeIndicator");
    let altitudeIndicator = altitudeIndicatorGameObject.getComponent("Text");
    let higherThanGameObject = Game.findByNameOne("HigherThan");
    let higherThan = higherThanGameObject.getComponent("Text");
    let temperatureGameObject = Game.findByNameOne("Temperature");
    let temperature = temperatureGameObject.getComponent("Text");

    let floorNumber = -Math.ceil(player.y / Constants.platformHeight);
    floorIndicator.text = "Platform: " + (floorNumber + 1) + " of " +  Constants.platforms;
    let feet = Math.floor(-player.y);
    let miles = Math.floor(feet / 5280*10)/10;
    altitudeIndicator.text = "Altitude: " + feet.toLocaleString("en-US") + " feet, (" + miles + " mile(s))";
    

    let heightIndex = 0;
    for(let i = 0; i < heights.length; i++) {
      if(heights[i].height > feet) {
        heightIndex = i-1
        break;
      }
    }
    higherThan.text = "(That's higher than: " + heights[heightIndex].name + ")";

    temperature.text = "It is " + Math.floor(60 + player.y/1_000*3.5) + "°F";

    
  }

}

export default RocketContoller;
