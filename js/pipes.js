import { canvas, ctx } from "./index.js";
import { Player, PLAYER_WIDTH, PLAYER_HEIGHT } from "./player.js"
import { Collision } from "./collisions.js";

const PIPE_WIDTH = 60;
const PIPE_HEIGHT = 240;

export class Pipes {
    static pipes = [];

    static New() {
        const OFFSET = Math.round(Math.random() * 280) - 140;
        this.pipes.push(new Pipe(OFFSET - 100));
        this.pipes.push(new Pipe(canvas.height - PIPE_HEIGHT + OFFSET + 100));
    }

    static Update(delta) {
        for(let i = 0; i < this.pipes.length; i++)
            this.pipes[i].Update(delta);
    }

    
    static Draw() {
        ctx.fillStyle = "#FF0000";
        for(let i = 0; i < this.pipes.length; i++)
            ctx.fillRect(...this.pipes[i].Draw());
    }
}

export class Pipe {
    x = canvas.width;

    Update(delta) {
        this.x -= 110 * delta;

        if(Collision.Collides3(this.x, this.y, PIPE_WIDTH, PIPE_HEIGHT, Player.x, Player.y, PLAYER_WIDTH, PLAYER_HEIGHT))
            history.go(0);
    }

    Draw() {
        return [
            this.x,
            this.y,
            PIPE_WIDTH,
            PIPE_HEIGHT
        ];
    }

    constructor(y) {
        this.y = y;
    }
}
