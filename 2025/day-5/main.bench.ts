import { partOne } from "./part-one.ts";

const inputString = await Deno.readTextFile("./day-5/input.txt");
const input = inputString.split("\n\n").map((v) => v.split("\n"));

Deno.bench({
  name: "Day 5 - part 1",
  fn: () => {
    partOne(input);
  },
});
