import { Player } from "./player.js";
import { Pipes } from "./pipes.js";

export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

class Time {
    static then = Date.now();
    static now = Date.now();
    static delta = 0;
    static tick = 0;

    static Update() {
        Time.tick++;
        Time.then = Time.now;
        Time.now = Date.now();
        Time.delta = (Time.now - Time.then) / 1000;
    }
}

export default class Main {
    static keys = {};

    static KeysPressed() {
        return keys;
    }

    static Start() {
        Main.Update();
    }
    
    static Update() {
        Time.Update();
        Player.Update(Time.delta);
        if(Time.tick % 100 == 0)
            Pipes.New();
        Pipes.Update(Time.delta);
        Main.Draw();
        requestAnimationFrame(Main.Update);
    }

    static Draw() {
        // Clear screen
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background
        ctx.fillStyle = "#222222";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Player
        ctx.fillStyle = "#000000";
        ctx.fillRect(...Player.Draw());

        // Pipes
        Pipes.Draw(); 
    }
}


document.addEventListener("keydown", e => Main.keys[e.code] = true);
document.addEventListener("keyup", e => Main.keys[e.code] = false);

Main.Start();
