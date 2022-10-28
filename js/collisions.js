export default class Collision {
    static Collides(a, b, e, f, g, h) {
       return a > e && a < e + g && b > f && b < f + h;  
    }

    static Collides2(a, b, c, d, e, f, g, h) {
        return this.Collides(a, b, e, f, g, h) || this.Collides(a + c, b, e, f, g, h) || this.Collides(a, b + d, e, f, g, h) || this.Collides(a + c, b + d, e, f, g, h);
    }

    static Collides3(a, b, c, d, e, f, g, h) {
        return this.Collides2(a, b, c, d, e, f, g, h) || this.Collides2(e, f, g, h, a, b, c, d);
    }
}
