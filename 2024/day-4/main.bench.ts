import { partTwo } from "./count-mas.ts";
import { partOne } from "./find-xmas.ts";

const input = (await Deno.readTextFile("./day-4/input.txt")).split("\n");

Deno.bench({
  name: "Day 4 - part 1",
  fn: () => {
    partOne(input);
  },
});

Deno.bench({
  name: "Day 4 - part 2",
  fn: () => {
    partTwo(input);
  },
});
