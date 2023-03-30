class Round {
    private R: number;
    
    constructor(R: number) {
        this.R = R;
    }

    getRadius(): number {
        return this.R / 2;
    }
}

export default Round;