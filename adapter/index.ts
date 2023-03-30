import Round from "./Round";
import Square from "./Square";
import SquareAdapter from "./SquareAdapter";

const round = new Round(5);
const square = new Square(10);
const squareAdapter = new SquareAdapter(square);

console.log(round.getRadius());
console.log(squareAdapter.getRadius());
