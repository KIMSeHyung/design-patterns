import Square from "./Square";

class SquareAdapter {
    private square: Square;

    constructor(square: Square) {
        this.square = square;
    }

    public getRadius() {
        return this.square.getWidth() * Math.sqrt(2) / 2;
    }
}

export default SquareAdapter;