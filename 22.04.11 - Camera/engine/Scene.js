import Game from "../engine/Game.js"

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
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.save()

    ctx.translate(-Game.cameraULX, -Game.cameraULY);

    for (let i = -2; i <= 0; i++) {
      let thisLayer = this.gameObjects.filter(go=>go.layer == i);

      for (let gameObject of thisLayer) {
        gameObject.draw(ctx);
      }
    }

    ctx.restore()

    for (let i = 1; i <= 2; i++) {
      let thisLayer = this.gameObjects.filter(go=>go.layer == i);

      for (let gameObject of thisLayer) {
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