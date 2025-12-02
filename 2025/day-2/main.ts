import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = await Deno.readTextFile("./day-2/input.txt");

console.log({
  partOne: partOne(input),
  partTwo: partTwo(input),
});
