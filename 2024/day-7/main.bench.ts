import { partOne } from './part-one.ts'
import { partTwo } from './part-two.ts'

const input = await Deno.readTextFile('./day-7/input.txt')

Deno.bench({
  name: 'Day 7 part 1',
  fn: () => {
    const formattedInput = input
      .split('\n')
      .map((line) => line.split(':').map((part) => part.trim()))

    partOne(formattedInput)
  }
})

Deno.bench({
  name: 'Day 7 part 2',
  fn: () => {
    const formattedInput = input
      .split('\n')
      .map((line) => line.split(':').map((part) => part.trim()))

    partTwo(formattedInput)
  }
})
