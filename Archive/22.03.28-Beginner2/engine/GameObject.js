class GameObject{
  constructor(name){
    this.components = [];
    this.markForDelete = false;
    this.name = name || "EMPTY_NAME";
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
  add(componentArray){
    this.components.push(...componentArray);
    for(let component of componentArray){
      component.parent = this;
    }
    return this;
  }
}

export default GameObject;
