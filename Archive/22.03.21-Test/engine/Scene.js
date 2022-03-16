class Scene{
  constructor(title){
    this.title = title;
    this.gameObjects = [];
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
    this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete);
  }
}

export default Scene;