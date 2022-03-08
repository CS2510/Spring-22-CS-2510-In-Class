class Scene{
  constructor(title){
    this.title = title;
    this.gameObjects = [];
  }
  update(){
    for (let gameObject of this.gameObjects) {
      gameObject.update();
  }
  }
  draw(ctx){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let gameObject of this.gameObjects) {
        gameObject.draw(ctx);
    }
  }
}

export default Scene;