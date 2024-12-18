import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = await Deno.readTextFile("./day-10/input.txt");

const grid = input.trim().split("\n").map((row) => row.split(""));

Deno.bench({
  name: "Day 10 part 1",
  fn: () => {
    partOne(grid);
  },
});

Deno.bench({
  name: "Day 10 part 2",
  fn: () => {
    partTwo(grid);
  },
});
