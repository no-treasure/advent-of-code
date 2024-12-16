import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = await Deno.readTextFile("./day-9/input.txt");

Deno.bench({
  name: "Day 9 part 1",
  fn: () => {
    partOne(input.trimEnd());
  },
});

Deno.bench({
  name: "Day 9 part 2",
  fn: () => {
    partTwo(input.trimEnd());
  },
});
