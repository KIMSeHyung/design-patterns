class Circle {
    private _radious: number;

    constructor(radious: number) {
        this._radious = radious;
    }

    set radious(r: number) {
        this._radious = r;
    }

    get radious() {
        return this._radious;
    }

    public clone(): Circle {
        const circle = <Circle>Object.create(this);
        circle.radious += 1;
        return circle;
    }
}

export default Circle;