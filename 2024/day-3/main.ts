import { calculateMultiplications } from './calculate-multiplications.ts'
import { filterMultiplications } from './filter-multiplications.ts'

const input = await Deno.readTextFile('./day-3/input.txt')

const multiplications = input.match(/mul\(\d+,\d+\)/g) || []
const multiplicationsWithDo = input.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g) || []

console.log({
  partOne: calculateMultiplications(multiplications),
  partTwo: calculateMultiplications(filterMultiplications(multiplicationsWithDo))
})
