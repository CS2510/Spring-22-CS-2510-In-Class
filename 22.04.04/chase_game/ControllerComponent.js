import Component from "../engine/Component.js"
import Input from "../engine/Input.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import PrefabCircle from "../engine/PrefabCircle.js"


class ControllerComponent extends Component {
    constructor(parent) {
        super(parent);

        this.speed = 50;

        this.timeSinceLastPellet = 0;
        this.timeBetweenPellets = 1;
    }

    update(ctx) {
        let playerGameObject = Game.findByNameOne("Player")
        let player = playerGameObject.getComponent("Circle");

        let diffX = 0;
        let diffY = 0;

        if (Input.getKey("a") || Input.getKey("ArrowLeft")) {
            diffX -= this.speed * Time.secondsBetweenFrame;
        }
        if (Input.getKey("d") || Input.getKey("ArrowRight")) {
            diffX += this.speed * Time.secondsBetweenFrame;
        }
        if (Input.getKey("s") || Input.getKey("ArrowDown")) {
            diffY += this.speed * Time.secondsBetweenFrame;
        }
        if (Input.getKey("w") || Input.getKey("ArrowUp")) {
            diffY -= this.speed * Time.secondsBetweenFrame;
        }


        if (player.x + diffX > -Game.bounds / 2 && player.x + diffX < Game.bounds / 2)
            player.x += diffX
        if (player.y + diffY > -Game.bounds / 2 && player.y + diffY< Game.bounds / 2)
            player.y += diffY


        //Move the camera
        Game.cameraCenterX = player.x;
        Game.cameraCenterY = player.y;
        // Game.cameraCenterX = 0;
        // Game.cameraCenterY = 0;
        
        Game.cameraULX = -Game.bounds/2 + Game.cameraCenterX;
        Game.cameraULY = -Game.bounds/2 + Game.cameraCenterY;

        //Create Pellets
        this.timeSinceLastPellet += Time.secondsBetweenFrame;
        if (this.timeSinceLastPellet >= this.timeBetweenPellets) {
            this.timeSinceLastPellet = 0;

            //Add a pellet


            let pelletX = (Math.random() * 2 - 1) * Game.bounds/2;
            let pelletY = (Math.random() * 2 - 1) * Game.bounds/2;
            
            

            let pellet = new PrefabCircle("Pellet", pelletX, pelletY, 10);
            pellet.getComponent("CircleDraw").fillStyle = "blue";
            pellet.layer = -2;
            Game.scene().gameObjects.push(pellet);
        }

    }
}

export default ControllerComponent