import IMobilePhone from "../../IMobilePhone";

class Iphone14Pro implements IMobilePhone {
    call(phoneNumber: string | number): void {
        console.log(`Iphone14Pro is calling to ${phoneNumber}`);
    }
    receive(): void {
        console.log("Iphone14Pro is receiving");
    }
}

export default Iphone14Pro;