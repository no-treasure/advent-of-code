import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const file = (await Deno.readTextFile("./day-4/input.txt")).split("\n");

console.log({
  partOne: partOne(file),
  partTwo: partTwo(file),
});
