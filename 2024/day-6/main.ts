import { countDistinctPositions } from './count-distinct-positions.ts'

const input = await Deno.readTextFile('./day-6/input.txt')
const matrix = input.split('\n').map((line) => line.split(''))

console.log({
  partOne: countDistinctPositions(matrix)
})
