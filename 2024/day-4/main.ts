import { countXmas } from './find-xmas.ts'

const file = await Deno.readTextFile('./day-4/input.txt')

console.log({ partOne: countXmas(file.split('\n')) })
