import IWeapon from "./IWeapon";

class Bow implements IWeapon {
    public attack(): void {
        console.log("Bow attack!");
    }
}

export default Bow;