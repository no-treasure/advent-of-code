import { assertEquals } from '@std/assert'
import { countXmas } from './find-xmas.ts'

Deno.test({
  name: 'findXmas should return 18',
  fn: () => {
    assertEquals(
      countXmas([
        'MMMSXXMASM',
        'MSAMXMSMSA',
        'AMXSXMAAMM',
        'MSAMASMSMX',
        'XMASAMXAMM',
        'XXAMMXXAMA',
        'SMSMSASXSS',
        'SAXAMASAAA',
        'MAMMMXMMMM',
        'MXMXAXMASX'
      ]),
      18
    )
  }
})
