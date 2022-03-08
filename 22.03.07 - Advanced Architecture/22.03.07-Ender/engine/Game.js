class Game{
  static scenes = [];
  static currentSceneIndex = 0;
  static scene(){
    return Game.scenes[Game.currentSceneIndex];
  }
  static findByType(type){
    return Game.scene().gameObjects.filter(go=>go.constructor.name == type);
  }
}

export default Game;