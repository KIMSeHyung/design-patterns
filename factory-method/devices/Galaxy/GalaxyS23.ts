import IMobilePhone from "../../IMobilePhone";

class GalaxyS23 implements IMobilePhone {
    call(phoneNumber: string | number): void {
        console.log(`GalaxyS23 is calling to ${phoneNumber}`);
    }
    receive(): void {
        console.log("GalaxyS23 is receiving");
    }
}

export default GalaxyS23;