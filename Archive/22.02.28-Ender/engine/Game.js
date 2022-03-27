import Input from "./Input.js"
import Time from "./Time.js"

class Game {
  static scenes = [];
  static currentSceneIndex = 0;
  static ctx;

  static getCurrentScene() {
    return Game.scenes[Game.currentSceneIndex];
  }

  static update() {
    let currentScene = this.getCurrentScene();
    currentScene.update();
  }
  static draw(ctx) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    let currentScene = this.getCurrentScene();
    currentScene.draw(ctx);
  }

  static start(){
    Game.ctx = Game.getContext();
    Input.attach(document);
    setInterval(Game.tick, Time.millisecondsBetweenFrames)
  }

  static getContext(){
    let canvas = document.querySelector("#canv");
    let ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return ctx;
  }


  static tick(){
    Input.update();
    Game.update();
    Game.draw(Game.ctx);
    Time.timePassed += Time.secondsBetweenFrame;

  }
}

export default Game;