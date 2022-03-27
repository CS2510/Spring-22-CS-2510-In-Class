class Scene{
  constructor(){
    this.gameObjects = [];
  }
  update(){
    this.gameObjects.forEach(go=>go.update());
  }
  draw(ctx){
    this.gameObjects.forEach(go=>go.draw(ctx))
  }
}

export default Scene