import {
  howManyReportsAreSafe,
  howManyReportsAreSafeWithDampener
} from './how-many-reports-are-safe.ts'

const input = await Deno.readTextFile('./day-2/input.txt')

const reports = input.split('\n').map((line) => line.split(' ').map(Number))

console.log({
  partOne: howManyReportsAreSafe(reports),
  partTwo: howManyReportsAreSafeWithDampener(reports)
})
