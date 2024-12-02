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

Deno.readTextFile('./day-1/input.txt').then((data) => {
  const [firstColumn, secondColumn] = extractColumns(data)

  console.log(totalDistanceBetweenLists(firstColumn, secondColumn))
  console.log(similarityScore(firstColumn, secondColumn))
})
