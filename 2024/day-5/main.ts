import { middlePageNumber } from './middle-page-number.ts'

const input = (await Deno.readTextFile('./day-5/input.txt')).split('\n')

const dividerIndex = input.findIndex((line) => line === '')

const rules = input.slice(0, dividerIndex)
const pages = input.slice(dividerIndex + 1)

console.log({
  partOne: middlePageNumber(rules, pages)
})
