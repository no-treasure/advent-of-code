import { countXmas } from './find-xmas.ts'

Deno.readTextFile('./day-4/input.txt').then((data) => {
  const partOne = countXmas(data.split('\n'))

  console.log({ partOne })
})
