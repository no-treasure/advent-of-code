import { partOne, partTwo } from './solution.ts'

const input = await Deno.readTextFile('./day-2/input.txt')

const reports = input.split('\n').map((line) => line.split(' ').map(Number))

Deno.bench({
  name: 'Day 2 - part 1',
  fn: () => {
    partOne(reports)
  }
})

Deno.bench({
  name: 'Day 2 - part 2',
  fn: () => {
    partTwo(reports)
  }
})
