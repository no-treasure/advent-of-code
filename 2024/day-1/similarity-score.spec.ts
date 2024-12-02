import { assertEquals } from '@std/assert'

import { similarityScore } from './similarity-score.ts'

Deno.test(function addTest() {
  assertEquals(similarityScore([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]), 31)
})
