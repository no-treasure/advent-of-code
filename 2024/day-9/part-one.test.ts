import { assertEquals } from "jsr:@std/assert";
import { partOne } from "./part-one.ts";

Deno.test({
  name: "partOne should return 60",
  fn: () => {
    assertEquals(partOne("12345"), 60);
  },
});

Deno.test({
  name: "partOne should return 1928",
  fn: () => {
    assertEquals(partOne("2333133121414131402"), 1928);
  },
});

Deno.test({
  name: "partOne should return 7",
  fn: () => {
    assertEquals(partOne("211212"), 7);
  },
});

Deno.test({
  name: "partOne should return 3",
  fn: () => {
    assertEquals(partOne("301203"), 3);
  },
});

Deno.test({
  name: "partOne should return 27",
  fn: () => {
    assertEquals(partOne("10203"), 27);
  },
});

Deno.test({
  name: "partOne should return 226258",
  fn: () => {
    assertEquals(
      partOne(
        "482533111741669905998998427178272379740587960705247895840125666336842334",
      ),
      226258,
    );
  },
});
