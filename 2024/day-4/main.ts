import { countXmas } from './find-xmas.ts'

const file = await Deno.readTextFile('./day-4/input.txt')

Deno.bench({
  name: 'Day 4 - part 1',
  fn: () => {
    countXmas(file.split('\n'))
  }
})

console.log({ partOne: countXmas(file.split('\n')) })
