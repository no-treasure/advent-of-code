import { partOne } from "./part-one.ts";

const input = await Deno.readTextFile("./day-9/input.txt");

console.log({
  partOne: partOne(input.trim()),
});
