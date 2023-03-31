import Circle from "./Circle";
import Rectangle from "./Rectangle";

const circle = new Circle(3);
const circleCopied = circle.clone();

console.log(`circle origianl radious: ${circle.radious}`);
console.log(`circle copied radious: ${circleCopied.radious}`);

const rectangle = new Rectangle(1, 2);
const rectangleCopied = rectangle.clone();

console.log(`rectangle original width: ${rectangle.width}, height: ${rectangle.height}`);
console.log(`rectangle copied width: ${rectangleCopied.width}, height: ${rectangleCopied.height}`);