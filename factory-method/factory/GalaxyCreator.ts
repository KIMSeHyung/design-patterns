import IMobilePhone from "../IMobilePhone";
import MobilePhoneCreator from "../MobilePhoneCreator";
import Galaxy from "../devices/Galaxy";

class GalaxyCreator extends MobilePhoneCreator {
    protected getDevice(deviceName: string): IMobilePhone {
        return Galaxy[deviceName];
    }
}

export default GalaxyCreator;