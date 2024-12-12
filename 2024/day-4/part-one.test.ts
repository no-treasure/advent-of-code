import { assertEquals } from "@std/assert";
import { partOne } from "./part-one.ts";

Deno.test({
  name: "partOne should return 18",
  fn: () => {
    assertEquals(
      partOne([
        "MMMSXXMASM",
        "MSAMXMSMSA",
        "AMXSXMAAMM",
        "MSAMASMSMX",
        "XMASAMXAMM",
        "XXAMMXXAMA",
        "SMSMSASXSS",
        "SAXAMASAAA",
        "MAMMMXMMMM",
        "MXMXAXMASX",
      ]),
      18,
    );
  },
});
