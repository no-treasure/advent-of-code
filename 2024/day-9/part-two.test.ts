import { assertEquals } from "jsr:@std/assert";
import { partTwo } from "./part-two.ts";

Deno.test({
  name: "partTwo should return 2858",
  fn: () => {
    assertEquals(partTwo("2333133121414131402"), 2858);
  },
});

Deno.test({
  name: "partTwo should return 2858212",
  fn: () => {
    assertEquals(
      partTwo(
        "482533111741669905998998427178272379740587960705247895840125666336842334",
      ),
      266174,
    );
  },
});
