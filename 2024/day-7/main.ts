import { partOne } from './part-one.ts'

const input = await Deno.readTextFile('./day-7/input.txt')

const formattedInput = input.split('\n').map((line) => line.split(':').map((part) => part.trim()))

console.log({
  partOne: partOne(formattedInput)
})
