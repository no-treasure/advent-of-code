import { assertEquals } from '@std/assert'
import { countMas } from './count-mas.ts'

Deno.test({
  name: 'findXmas more should return 9',
  fn: () => {
    assertEquals(
      countMas([
        '.M.S......',
        '..A..MSMS.',
        '.M.S.MAA..',
        '..A.ASMSM.',
        '.M.S.M....',
        '..........',
        'S.S.S.S.S.',
        '.A.A.A.A..',
        'M.M.M.M.M.',
        '..........'
      ]),
      9
    )
  }
})
