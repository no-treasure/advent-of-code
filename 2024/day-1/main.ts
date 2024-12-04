import { similarityScore } from './similarity-score.ts'
import { totalDistanceBetweenLists } from './total-distance-between-lists.ts'

function extractColumns(data: string): [Array<number>, Array<number>] {
  const { firstColumn = [], secondColumn = [] } = Object.groupBy(
    data
      .split('\n')
      .map((line) => line.split(' '))
      .flat()
      .filter(Boolean)
      .map(Number),
    (_, index) => (index % 2 ? 'secondColumn' : 'firstColumn')
  )

  return [firstColumn, secondColumn]
}

const input = await Deno.readTextFile('./day-1/input.txt')

const [firstColumn, secondColumn] = extractColumns(input)

Deno.bench({
  name: 'Day 1 - part 1',
  fn: () => {
    totalDistanceBetweenLists(firstColumn, secondColumn)
  }
})

Deno.bench({
  name: 'Day 1 - part 2',
  fn: () => {
    similarityScore(firstColumn, secondColumn)
  }
})

console.log({
  partOne: totalDistanceBetweenLists(firstColumn, secondColumn),
  partTwo: similarityScore(firstColumn, secondColumn)
})
