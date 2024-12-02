import { assertEquals } from '@std/assert'

import { totalDistanceBetweenLists } from './total-distance-between-lists.ts'

Deno.test(function addTest() {
  assertEquals(totalDistanceBetweenLists([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]), 11)
})
