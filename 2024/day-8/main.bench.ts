import { partOne } from "./part-one.ts";

const input = await Deno.readTextFile("./day-8/input.txt");

Deno.bench({
  name: "Day 7 part 1",
  fn: () => {
    const grid = input
      .trimEnd()
      .split("\n")
      .map((v) => v.split(""));

    partOne(grid);
  },
});
