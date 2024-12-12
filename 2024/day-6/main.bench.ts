import { partOne } from "./count-distinct-positions.ts";

const input = await Deno.readTextFile("./day-6/input.txt");

Deno.bench({
  name: "Day 6 part 1",
  fn: () => {
    const matrix = input.split("\n").map((line) => line.split(""));

    partOne(matrix);
  },
});
