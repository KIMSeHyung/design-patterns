class Rectangle  {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(w: number) {
        this._width = w;
    }

    get height() {
        return this._height;
    }

    set height(h: number) {
        this._height = h;
    }

    public clone(): Rectangle {
        const rectangle = <Rectangle>Object.create(this);
        rectangle.width += 1;
        rectangle.height += 2;
        return rectangle;
    }
}

export default Rectangle;