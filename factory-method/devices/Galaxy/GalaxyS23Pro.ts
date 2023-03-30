import IMobilePhone from "../../IMobilePhone";

class GalaxyS23Pro implements IMobilePhone {
    call(phoneNumber: string | number): void {
        console.log(`GalaxyS23Pro is calling to ${phoneNumber}`);
    }
    receive(): void {
        console.log("GalaxyS23Pro is receiving");
    }
}

export default GalaxyS23Pro;