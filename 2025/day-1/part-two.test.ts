import { assertEquals } from "@std/assert";
import { partTwo } from "./part-two.ts";

Deno.test(function addTest() {
  assertEquals(
    partTwo([
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
    6,
  );
});
