class GameObject{
  constructor(name = "NONAME"){
    this.components = [];
    this.markForDelete = false;
    this.name = name;
  }
  update(ctx){
    this.components.filter(c=>c.update).forEach(c=>c.update(ctx));
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
  }
  getComponent(componentString){
    return this.components.find(c=>c.constructor.name == componentString);
  }
}

export default GameObject;
