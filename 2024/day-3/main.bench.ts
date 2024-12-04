import { calculateMultiplications } from './calculate-multiplications.ts'
import { filterMultiplications } from './filter-multiplications.ts'

const input = await Deno.readTextFile('./day-3/input.txt')

Deno.bench({
  name: 'Day 3 - part 1',
  fn: () => {
    const multiplications = input.match(/mul\(\d+,\d+\)/g) || []

    calculateMultiplications(multiplications)
  }
})

Deno.bench({
  name: 'Day 3 - part 2',
  fn: () => {
    const multiplicationsWithDo = input.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g) || []

    calculateMultiplications(filterMultiplications(multiplicationsWithDo))
  }
})
