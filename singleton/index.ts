import Singleton from "./Singleton";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2);

singleton1.check();
singleton2.check();