class GameObject{
  constructor(){
    this.components = [];
  }
  update(){
    this.components.filter(c=>c.update).forEach(c=>c.update());
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw());
  }
}

export default GameObject;