import { assertEquals } from "@std/assert";
import { partOne } from "./part-one.ts";

Deno.test(function addTest() {
  assertEquals(
    partOne([
      ["123", "328", " 51", "64 "],
      ["45", "64", "387", "23"],
      ["6", "98", "215", "314"],
      ["*", "+", "*", "+"],
    ]),
    4277556,
  );
});
