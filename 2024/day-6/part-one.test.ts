import { assertEquals } from "@std/assert";
import { partOne } from "./part-one.ts";

Deno.test({
  name: "partOne should return",
  fn: () => {
    assertEquals(
      partOne([
        [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
        ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
      ]),
      41,
    );
  },
});
