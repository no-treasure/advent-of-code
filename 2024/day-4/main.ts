import { countMas } from './count-mas.ts'
import { countXmas } from './find-xmas.ts'

const file = (await Deno.readTextFile('./day-4/input.txt')).split('\n')

console.log({
  partOne: countXmas(file),
  partTwo: countMas(file)
})
