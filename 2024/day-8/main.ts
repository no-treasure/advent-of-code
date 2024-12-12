import { partOne } from './part-one.ts'

const input = await Deno.readTextFile('./day-8/input.txt')

const grid = input
  .trimEnd()
  .split('\n')
  .map((v) => v.split(''))

console.log({
  partOne: partOne(grid)
})
