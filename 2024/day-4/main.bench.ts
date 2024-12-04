import { countMas } from './count-mas.ts'
import { countXmas } from './find-xmas.ts'

const input = (await Deno.readTextFile('./day-4/input.txt')).split('\n')

Deno.bench({
  name: 'Day 4 - part 1',
  fn: () => {
    countXmas(input)
  }
})

Deno.bench({
  name: 'Day 4 - part 2',
  fn: () => {
    countMas(input)
  }
})
