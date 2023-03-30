import Iphone14 from "../devices/Iphone/Iphone14";
import Iphone14Pro from "../devices/Iphone/Iphone14pro";
import IMobilePhone from "../IMobilePhone";
import MobilePhoneCreator from "../MobilePhoneCreator";

class IphoneCreator extends MobilePhoneCreator {
    protected getDevice(deviceName: string): IMobilePhone {
        switch (deviceName) {
            case "Iphone14Pro":
                return new Iphone14Pro();
            default:
                return new Iphone14();
        }
    }
}

export default IphoneCreator;