import { countXmas } from './find-xmas.ts'

const input = await Deno.readTextFile('./day-4/input.txt')

Deno.bench({
  name: 'Day 4 - part 1',
  fn: () => {
    countXmas(input.split('\n'))
  }
})
