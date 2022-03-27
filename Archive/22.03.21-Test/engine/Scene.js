class Scene{
  constructor(title){
    this.title = title;
    //this.restart();
  }
  restart(){
    this.gameObjects = [];
    this.start();
  }
  update(ctx){
    for (let gameObject of this.gameObjects) {
      gameObject.update(ctx);
  }
  }
  draw(ctx){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let gameObject of this.gameObjects) {
        gameObject.draw(ctx);
    }
  }
  remove(){
    let toRemove = this.gameObjects.filter(g=>g.markForDelete);
    if(toRemove.length > 0)
      console.log(toRemove.length)
    this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete);
  }
}

export default Scene;