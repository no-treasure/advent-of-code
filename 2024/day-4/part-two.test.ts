import { assertEquals } from "jsr:@std/assert";
import { partTwo } from "./part-two.ts";

Deno.test({
  name: "findXmas more should return 9",
  fn: () => {
    assertEquals(
      partTwo([
        ".M.S......",
        "..A..MSMS.",
        ".M.S.MAA..",
        "..A.ASMSM.",
        ".M.S.M....",
        "..........",
        "S.S.S.S.S.",
        ".A.A.A.A..",
        "M.M.M.M.M.",
        "..........",
      ]),
      9,
    );
  },
});
