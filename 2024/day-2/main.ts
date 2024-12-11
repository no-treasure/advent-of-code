import { partOne, partTwo } from './solution.ts'

const input = await Deno.readTextFile('./day-2/input.txt')

const reports = input.split('\n').map((line) => line.split(' ').map(Number))

console.log({
  partOne: partOne(reports),
  partTwo: partTwo(reports)
})
