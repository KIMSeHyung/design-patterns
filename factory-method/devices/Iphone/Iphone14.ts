import IMobilePhone from "../../IMobilePhone";

class Iphone14 implements IMobilePhone {
    call(phoneNumber: string | number): void {
        console.log(`Iphone14 is calling to ${phoneNumber}`);
    }
    receive(): void {
        console.log("Iphone14 is receiving");
    }
}

export default Iphone14;