import { assertEquals } from "@std/assert";
import { partOne } from "./part-one.ts";

Deno.test(function addTest() {
  assertEquals(
    partOne(
      [
        "..@@.@@@@.",
        "@@@.@.@.@@",
        "@@@@@.@.@@",
        "@.@@@@..@.",
        "@@.@@@@.@@",
        ".@@@@@@@.@",
        ".@.@.@.@@@",
        "@.@@@.@@@@",
        ".@@@@@@@@.",
        "@.@.@@@.@.",
      ],
    ),
    13,
  );
});
