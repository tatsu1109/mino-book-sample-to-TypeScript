export default class Location {
    private readonly x:number;
    private readonly y:number;

    constructor(x:number,  y:number) {
        this.x = x;
        this.y = y;
    }

    shift(shiftX:number, shiftY:number):Location {
        const nextX = this.x + shiftX;
        const nextY = this.y + shiftY;

        return new Location(nextX, nextY);

    }
}