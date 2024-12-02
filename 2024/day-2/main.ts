import {
  howManyReportsAreSafe,
  howManyReportsAreSafeWithDampener
} from './how-many-reports-are-safe.ts'

Deno.readTextFile('./day-2/input.txt').then((data) => {
  const reports = data.split('\n').map((line) => line.split(' ').map(Number))

  console.log(howManyReportsAreSafe(reports))
  console.log(howManyReportsAreSafeWithDampener(reports))
})
