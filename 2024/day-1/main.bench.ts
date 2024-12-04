import { extractColumns } from './extract-columns.ts'
import { similarityScore } from './similarity-score.ts'
import { totalDistanceBetweenLists } from './total-distance-between-lists.ts'

const input = await Deno.readTextFile('./day-1/input.txt')

Deno.bench({
  name: 'Day 1 - part 1',
  fn: () => {
    totalDistanceBetweenLists(...extractColumns(input))
  }
})

Deno.bench({
  name: 'Day 1 - part 2',
  fn: () => {
    similarityScore(...extractColumns(input))
  }
})
