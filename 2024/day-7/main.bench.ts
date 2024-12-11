import { partOne } from './part-one.ts'

const input = await Deno.readTextFile('./day-7/input.txt')

Deno.bench({
  name: 'Day 6 part 1',
  fn: () => {
    const formattedInput = input
      .split('\n')
      .map((line) => line.split(':').map((part) => part.trim()))

    partOne(formattedInput)
  }
})
