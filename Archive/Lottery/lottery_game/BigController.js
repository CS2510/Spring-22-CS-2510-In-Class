import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"


class BigController extends Component {
  constructor(parent) {
    super(parent);
    this.speed = 100;


  }
  update(ctx) {
    let playerGameObject = Game.findByNameOne("Player");
    let player = playerGameObject.getComponent("Circle");

    let dx = 0;
    let dy = 0;
    if(Input.getKey("a") || Input.getKey("ArrowLeft"))
      dx -= Time.secondsBetweenFrame * this.speed;
    if(Input.getKey("d") || Input.getKey("ArrowRight"))
      dx += Time.secondsBetweenFrame * this.speed;
    if(Input.getKey("w") || Input.getKey("ArrowUp"))
      dy -= Time.secondsBetweenFrame * this.speed;
    if(Input.getKey("s") || Input.getKey("ArrowDown"))
      dy += Time.secondsBetweenFrame * this.speed;

    player.x += dx
    player.y += dy

    Game.cameraX = player.x;
    Game.cameraY = player.y;


    
  }

}

export default BigController;
