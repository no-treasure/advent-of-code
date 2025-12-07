import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const inputString = await Deno.readTextFile("./day-5/input.txt");
const input = inputString.split("\n\n").map((v) => v.split("\n"));

console.log({
  partOne: partOne(input),
  partTwo: partTwo(input),
});
