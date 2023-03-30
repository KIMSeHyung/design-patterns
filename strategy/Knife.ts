import IWeapon from "./IWeapon";

class Knife implements IWeapon {
    public attack(): void {
        console.log("knife attack!");
    }
    
}

export default Knife;