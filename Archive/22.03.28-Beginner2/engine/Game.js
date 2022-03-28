class Game{
  static scenes = [];
  static currentSceneIndex = 0;
  static nextSceneIndex = -1;
  static persistent = {};
  static scene(){
    return Game.scenes[Game.currentSceneIndex];
  }
  static findByType(type){
    return Game.scene().gameObjects.filter(go=>go.constructor.name == type);
  }
  static findByName(name){
    return Game.scene().gameObjects.filter(go=>go.name == name);
  }
  static findByTypeOne(type){
    return Game.scene().gameObjects.find(go=>go.constructor.name == type);
  }
  static findByNameOne(name){
    return Game.scene().gameObjects.find(go=>go.name == name);
  }
  static updateScene(){
    if(Game.nextSceneIndex != -1){
      Game.currentSceneIndex = Game.nextSceneIndex;
      Game.nextSceneIndex = -1;
      Game.scene().restart();
    }
  }
  static changeScene(index){
    Game.nextSceneIndex = index;
  }
  static instantiate(gameObject){
    Game.scene().gameObjects.push(gameObject);
    return gameObject;
  }
  static remove(gameObject){
    gameObject.markForDelete = true;
  }
}

export default Game;