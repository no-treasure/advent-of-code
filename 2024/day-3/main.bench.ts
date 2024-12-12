import { filterMultiplications } from "./filter-multiplications.ts";
import { partOne } from "./part-one.ts";

const input = await Deno.readTextFile("./day-3/input.txt");

Deno.bench({
  name: "Day 3 - part 1",
  fn: () => {
    const multiplications = input.match(/mul\(\d+,\d+\)/g) || [];

    partOne(multiplications);
  },
});

Deno.bench({
  name: "Day 3 - part 2",
  fn: () => {
    const multiplicationsWithDo =
      input.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g) || [];

    partOne(filterMultiplications(multiplicationsWithDo));
  },
});
