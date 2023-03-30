import Bow from "./Bow";
import Charactor from "./charactor";
import Knife from "./Knife";

const charactor = new Charactor();

charactor.attack();

charactor.setWeapon(new Knife());
charactor.attack();

charactor.setWeapon(new Bow());
charactor.attack();
