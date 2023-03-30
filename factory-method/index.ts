import GalaxyCreator from "./factory/GalaxyCreator";
import IphoneCreator from "./factory/IphoneCreator";

const galaxyCreator = new GalaxyCreator();
const iPhoneCreator = new IphoneCreator();

const s23 = galaxyCreator.create("GalaxyS23");
const s23Plus = galaxyCreator.create("GalaxyS23Plus");
const s23Pro = galaxyCreator.create("GalaxyS23Pro");

s23.call("010111111");
s23Plus.receive();
s23Pro.call("010222222");
s23.receive();

const iPhone14 = iPhoneCreator.create("Iphone14");
const iPhone14Pro = iPhoneCreator.create("Iphone14Pro");

iPhone14.call("01012341234");
iPhone14Pro.receive();
