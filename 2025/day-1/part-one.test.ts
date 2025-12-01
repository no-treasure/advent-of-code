import { assertEquals } from "@std/assert";
import { partOne } from "./part-one.ts";

Deno.test(function addTest() {
  assertEquals(
    partOne([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ]),
    3,
  );
});
