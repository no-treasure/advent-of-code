import { extractColumns } from './extract-columns.ts'
import { similarityScore } from './similarity-score.ts'
import { totalDistanceBetweenLists } from './total-distance-between-lists.ts'

const input = await Deno.readTextFile('./day-1/input.txt')

console.log({
  partOne: totalDistanceBetweenLists(...extractColumns(input)),
  partTwo: similarityScore(...extractColumns(input))
})
