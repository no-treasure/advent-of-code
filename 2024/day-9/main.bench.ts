import { partOne } from "./part-one.ts";

const input = await Deno.readTextFile("./day-9/input.txt");

Deno.bench({
  name: "Day 9 part 1",
  fn: () => {
    partOne(input.trimEnd())
  },
});
