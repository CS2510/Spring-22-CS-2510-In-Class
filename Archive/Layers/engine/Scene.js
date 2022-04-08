class Scene {
  constructor(title, fillColor = "black") {
    this.title = title;
    this.fillColor = fillColor;
  }
  restart() {
    this.gameObjects = [];
    this.start();
  }
  update(ctx) {
    for (let gameObject of this.gameObjects) {
      gameObject.update(ctx);
    }
  }
  draw(ctx) {
    //Clear
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    //Draw Layers
    for (let i = -2; i <= 2; i++) {
      for (let gameObject of this.gameObjects.filter(go=>go.layer == i)) {
        gameObject.draw(ctx);
      }
    }
  }
  remove() {
    let toRemove = this.gameObjects.filter(g => g.markForDelete);
    if (toRemove.length > 0)
      console.log(toRemove.length)
    this.gameObjects = this.gameObjects.filter(g => !g.markForDelete);
  }
}

export default Scene;