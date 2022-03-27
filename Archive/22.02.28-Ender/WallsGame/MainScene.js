import Scene from "../engine/Scene.js"
import Wall from "./Wall.js"
class MainScene extends Scene{
  constructor(){
    super();
    this.gameObjects.push(new Wall(20, 10, 100, 10));
    this.gameObjects.push(new Wall(20, 120, 100, 10));
    this.gameObjects.push(new Wall(10, 20, 10, 100));
    this.gameObjects.push(new Wall(120, 20, 10, 100));

  }
}

export default MainScene