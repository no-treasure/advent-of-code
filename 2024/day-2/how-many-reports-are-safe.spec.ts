import { assertEquals } from '@std/assert'

import { howManyReportsAreSafe } from './how-many-reports-are-safe.ts'

Deno.test({
  name: 'howManyReportsAreSafe should return 2',
  fn: () => {
    assertEquals(
      howManyReportsAreSafe([
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9]
      ]),
      2
    )
  }
})
