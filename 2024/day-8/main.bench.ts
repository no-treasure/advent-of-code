import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = await Deno.readTextFile("./day-8/input.txt");

Deno.bench({
  name: "Day 8 part 1",
  fn: () => {
    const grid = input
      .trimEnd()
      .split("\n")
      .map((v) => v.split(""));

    partOne(grid);
  },
});

Deno.bench({
  name: "Day 8 part 2",
  fn: () => {
    const grid = input
      .trimEnd()
      .split("\n")
      .map((v) => v.split(""));

    partTwo(grid);
  },
});
