import Game from "./Game.js"

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
    
    //Fill the canvas to the browser

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    //Fill with a generic color. If the aspect ratio does not fill the browser exactly, then this is to color of the bars that will be displayed.
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Compensate for aspect ratio
    let currentAspectRatio = ctx.canvas.width / ctx.canvas.height;

    //Variables for the new drawing space
    let newX = ctx.canvas.width;
    let newY = ctx.canvas.height;
    let marginX = 0;
    let marginY = 0;


    if(Game.aspectRatio > currentAspectRatio){
      //Shrink in Y
      newY = ctx.canvas.width / Game.aspectRatio;
      marginY = (ctx.canvas.height - newY)/2;
    }
    else //if Game.aspectRatio <= currentaspectRatio
    {
      //Shrink in X
      newX = ctx.canvas.height * Game.aspectRatio;
      marginX = (ctx.canvas.width - newX)/2;
    }

    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 10;
    // ctx.beginPath();
    // ctx.rect(marginX, marginY, newX, newY);
    // ctx.stroke();

    //Transform to account for the margins
    ctx.save();
    ctx.translate(marginX, marginY);

    //Clear
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(0, 0, newX, newY);


    //Draw Layers
    for (let i = -2; i <= 2; i++) {
      for (let gameObject of this.gameObjects.filter(go => go.layer == i)) {
        gameObject.draw(ctx);
      }
    }

    ctx.restore();
  }
  remove() {
    let toRemove = this.gameObjects.filter(g => g.markForDelete);
    if (toRemove.length > 0)
      console.log(toRemove.length)
    this.gameObjects = this.gameObjects.filter(g => !g.markForDelete);
  }
}

export default Scene;