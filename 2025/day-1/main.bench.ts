import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const inputString = await Deno.readTextFile("./day-1/input.txt");
const input = (await inputString).split("\n");

Deno.bench({
  name: "Day 1 - part 1",
  fn: () => {
    partOne(input);
  },
});

Deno.bench({
  name: "Day 1 - part 2",
  fn: () => {
    partTwo(input);
  },
});
