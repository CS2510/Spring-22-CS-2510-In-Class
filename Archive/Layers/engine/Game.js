class Game {

  static scenes = []; 

  static currentSceneIndex = 0; 

  static nextSceneIndex = -1; 
  static paused = false;
  static aspectRatio = 1; //Default aspect ratio

  static scene() {
    return Game.scenes[Game.currentSceneIndex];
  }
  static findByType(type) {
    return Game.scene().gameObjects.filter(go => go.constructor.name == type);
  }
  static findByTypeOne(type) {
    return Game.scene().gameObjects.find(go => go.constructor.name == type);
  }
  static findByName(type) {
    return Game.scene().gameObjects.filter(go => go.name == type);
  }
  static findByNameOne(type) {
    return Game.scene().gameObjects.find(go => go.name == type);
  }
  static updateScene() {
    if (Game.nextSceneIndex != -1) {
      Game.currentSceneIndex = Game.nextSceneIndex;
      Game.nextSceneIndex = -1;
      Game.scene().restart();
    }
  }
  static changeScene(index) {
    Game.nextSceneIndex = index;
  }
  static instantiate(gameObject) {
    Game.scene().gameObjects.push(gameObject);
  }
  static fillBrowser(window, ctx) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    //Fill with a generic color. If the aspect ratio does not fill the browser exactly, then this is to color of the bars that will be displayed.
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    
    let currentAspectRatio = ctx.canvas.width / ctx.canvas.height;
    // console.log(currentAspectRatio)

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

    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.rect(marginX, marginY, newX, newY);
    ctx.stroke();

    // let requiredScaleX = prefferedX / ctx.canvas.width;
    // let requiredScaleY = prefferedY / ctx.canvas.height;
    // let requiredScale = Math.min(requiredScaleX, requiredScaleY)
    // //console.log(requiredScale);


  }
}

export default Game;