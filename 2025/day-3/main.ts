import { partOne } from "./part-one.ts";

const inputString = await Deno.readTextFile("./day-3/input.txt");
const input = inputString.split("\n");

console.log({
  partOne: partOne(input),
});
