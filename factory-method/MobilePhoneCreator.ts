import IMobilePhone from "./IMobilePhone";

abstract class MobilePhoneCreator {
    protected abstract getDevice(deviceName: string): IMobilePhone;

    public create(deviceName: string): IMobilePhone {
        const device = this.getDevice(deviceName);
        return device;
    }
}

export default MobilePhoneCreator;