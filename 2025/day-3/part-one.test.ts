import { assertEquals } from "@std/assert";
import { partOne } from "./part-one.ts";

Deno.test(function addTest() {
  assertEquals(
    partOne(
      [
        "987654321111111",
        "811111111111119",
        "234234234234278",
        "818181911112111",
      ],
    ),
    357,
  );
});
