import IWeapon from "./IWeapon";

class Charactor {
    private weapone: IWeapon | undefined;

    public setWeapon(weapone: IWeapon) {
        this.weapone = weapone;
    }

    public attack() {
        if(!this.weapone) {
            console.log("no weapon!");
        } else {
            this.weapone.attack();
        }
    }
}

export default Charactor;