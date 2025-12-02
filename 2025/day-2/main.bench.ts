import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = await Deno.readTextFile("./day-2/input.txt");

Deno.bench({
  name: "Day 2 - part 1",
  fn: () => {
    partOne(input);
  },
});

Deno.bench({
  name: "Day 2 - part 2",
  fn: () => {
    partTwo(input);
  },
});
