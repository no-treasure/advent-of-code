import { partOne } from "./part-one.ts";

const input = await Deno.readTextFile("./day-10/input.txt");

const grid = input.trim().split("\n").map((row) => row.split(""));

console.log({
  partOne: partOne(grid),
  // partTwo: partTwo(input.trim()),
});
