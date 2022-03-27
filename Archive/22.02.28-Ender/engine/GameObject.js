class GameObject{
  constructor(){
    this.components = [];
  }
  update(){
    this.components.filter(c=>c.update).forEach(c=>c.update());
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
  }
  getComponent(type){
    return this.components.find(c=>c instanceof type); 
  }
  getComponents(type){
    return this.components.filter(c=>c instanceof type); 
  }
}

export default GameObject;