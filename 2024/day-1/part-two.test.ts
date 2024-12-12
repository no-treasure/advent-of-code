import { assertEquals } from "jsr:@std/assert";
import { partTwo } from "./part-two.ts";

Deno.test(function addTest() {
  assertEquals(partTwo([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]), 31);
});
