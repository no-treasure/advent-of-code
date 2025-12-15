import { partOne } from "./part-one.ts";

const inputString = await Deno.readTextFile("./day-6/input.txt");
const input = inputString
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => v.map((s) => s.trim()).filter(Boolean));

console.log({
  partOne: partOne(input),
});
