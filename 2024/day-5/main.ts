import { partOne } from './part-one.ts'
import { partTwo } from './part-two.ts'

const input = (await Deno.readTextFile('./day-5/input.txt')).split('\n')

const dividerIndex = input.findIndex((line) => line === '')

const rules = input.slice(0, dividerIndex)
const pages = input.slice(dividerIndex + 1)

console.log({
  partOne: partOne(rules, pages),
  partTwo: partTwo(rules, pages)
})
