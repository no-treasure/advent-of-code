import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = (await Deno.readTextFile("./day-5/input.txt")).split("\n");

Deno.bench({
  name: "Day 5 part 1",
  fn: () => {
    const dividerIndex = input.findIndex((line) => line === "");

    const rules = input.slice(0, dividerIndex);
    const pages = input.slice(dividerIndex + 1);

    partOne(rules, pages);
  },
});

Deno.bench({
  name: "Day 5 part 2",
  fn: () => {
    const dividerIndex = input.findIndex((line) => line === "");

    const rules = input.slice(0, dividerIndex);
    const pages = input.slice(dividerIndex + 1);

    partTwo(rules, pages);
  },
});
