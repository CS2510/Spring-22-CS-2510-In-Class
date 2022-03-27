import GameObject from "./GameObject.js";

class Prefab extends GameObject{
    constructor(name){
        super();
        this.name = name;
    }
    addComponents(components){
      for(let component of components){
        this.components.push(component);
        component.parent = this;
      }
    }

}

export default Prefab;