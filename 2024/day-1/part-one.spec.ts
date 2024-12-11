import { assertEquals } from '@std/assert'
import { partOne } from './part-one.ts'

Deno.test(function addTest() {
  assertEquals(partOne([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]), 11)
})
