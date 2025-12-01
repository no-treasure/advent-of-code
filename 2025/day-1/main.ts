import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const inputString = await Deno.readTextFile("./day-1/input.txt");
const input = (await inputString).split("\n");

console.log({
  partOne: partOne(input),
  partTwo: partTwo(input),
});
