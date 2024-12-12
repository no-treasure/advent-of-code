import { assertEquals } from "jsr:@std/assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test({
  name: "partOne should return 2",
  fn: () => {
    assertEquals(
      partOne([
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9],
      ]),
      2,
    );
  },
});

Deno.test({
  name: "partTwo should return 4",
  fn: () => {
    assertEquals(
      partTwo([
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9],
      ]),
      4,
    );
  },
});
