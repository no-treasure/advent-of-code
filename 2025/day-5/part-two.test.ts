import { assertEquals } from "@std/assert";
import { partTwo } from "./part-two.ts";

Deno.test(function addTest() {
  assertEquals(
    partTwo(
      [
        [
          "3-5",
          "10-14",
          "16-20",
          "12-18",
        ],
        [
          "1",
          "5",
          "8",
          "11",
          "17",
          "32",
        ],
      ],
    ),
    14,
  );
});
