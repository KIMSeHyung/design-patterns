import IMobilePhone from "../IMobilePhone";
import MobilePhoneCreator from "../MobilePhoneCreator";
import GalaxyS23 from "../devices/Galaxy/GalaxyS23";
import GalaxyS23Plus from "../devices/Galaxy/GalaxyS23Plus";
import GalaxyS23Pro from "../devices/Galaxy/GalaxyS23Pro";

class GalaxyCreator extends MobilePhoneCreator {
    protected getDevice(deviceName: string): IMobilePhone {
        switch (deviceName) {
            case "GalaxyS23Plus":
                return new GalaxyS23Plus();
            case "GalaxyS23Pro":
                return new GalaxyS23Pro();
            default:
                return new GalaxyS23();
        }
    }
}

export default GalaxyCreator;