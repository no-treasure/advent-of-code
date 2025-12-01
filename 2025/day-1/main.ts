import { partOne } from "./part-one.ts";

const inputString = await Deno.readTextFile("./day-1/input.txt");
const input = (await inputString).split("\n");

console.log({
  partOne1: partOne(input),
});
