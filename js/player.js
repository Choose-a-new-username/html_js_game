import Main from "./index.js";
import { canvas } from "./index.js";

export const PLAYER_WIDTH = 50;
export const PLAYER_HEIGHT = 50;
export class Player {
    static x = 10;
    static y = 200;
    static yvel = 0;
    static space_bar = false;

    static Update(delta) {
        this.yvel += 16;
        
        if(Main.keys["Space"]) {
            if(!this.space_bar) {
                this.space_bar = true;
                this.yvel = -170;
            }
        } else {
            this.space_bar = false;
        }

        this.y += this.yvel * delta;

        if(this.y + PLAYER_HEIGHT >= canvas.height) {
            history.go(0);
        }
    }

    static Draw() {
        return [
            this.x,
            this.y,
            PLAYER_WIDTH,
            PLAYER_HEIGHT 
        ]; 
    }
}
