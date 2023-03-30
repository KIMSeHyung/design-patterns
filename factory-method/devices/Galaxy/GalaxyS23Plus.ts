import IMobilePhone from "../../IMobilePhone";

class GalaxyS23Plus implements IMobilePhone {
    call(phoneNumber: string | number): void {
        console.log(`GalaxyS23Plus is calling to ${phoneNumber}`);
    }
    receive(): void {
        console.log("GalaxyS23Plus is receiving");
    }
}

export default GalaxyS23Plus;