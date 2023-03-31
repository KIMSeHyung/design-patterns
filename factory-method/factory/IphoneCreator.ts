import Iphone from "../devices/Iphone";
import IMobilePhone from "../IMobilePhone";
import MobilePhoneCreator from "../MobilePhoneCreator";

class IphoneCreator extends MobilePhoneCreator {
    protected getDevice(deviceName: string): IMobilePhone {
        return Iphone[deviceName];
    }
}

export default IphoneCreator;