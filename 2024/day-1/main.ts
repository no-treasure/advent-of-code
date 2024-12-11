import { extractColumns } from './extract-columns.ts'
import { partOne } from './part-one.ts'
import { partTwo } from './part-two.ts'

const input = await Deno.readTextFile('./day-1/input.txt')

console.log({
  partOne: partOne(...extractColumns(input)),
  partTwo: partTwo(...extractColumns(input))
})
