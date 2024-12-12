import { extractColumns } from "./extract-columns.ts";
import { partOne } from "./part-one.ts";
import { partTwo } from "./part-two.ts";

const input = await Deno.readTextFile("./day-1/input.txt");

Deno.bench({
  name: "Day 1 - part 1",
  fn: () => {
    partOne(...extractColumns(input));
  },
});

Deno.bench({
  name: "Day 1 - part 2",
  fn: () => {
    partTwo(...extractColumns(input));
  },
});
