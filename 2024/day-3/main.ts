// ["mul(123, 123)"] -> 15129
function calculateMultiplications(multiplications: Array<string>): number {
  return multiplications.reduce((acc, multiplication) => {
    const [a, b] = multiplication.split(',')

    return acc + Number(a.slice(4)) * Number(b.slice(0, -1))
  }, 0)
}

const input = await Deno.readTextFile('./day-3/input.txt')

const multiplications = input.match(/mul\(\d+,\d+\)/g) || []
const multiplicationsWithDo = input.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g) || []

const filterMultiplications = (inputMultiplications: Array<string>) => {
  let enabled = true

  return inputMultiplications.filter((multiplication) => {
    if (multiplication === `don't()`) {
      enabled = false

      return false
    }

    if (multiplication === `do()`) {
      enabled = true

      return false
    }

    return enabled
  }, 0)
}

Deno.bench({
  name: 'Day 3 - part 1',
  fn: () => {
    calculateMultiplications(multiplications)
  }
})

Deno.bench({
  name: 'Day 3 - part 2',
  fn: () => {
    calculateMultiplications(filterMultiplications(multiplicationsWithDo))
  }
})

console.log({
  partOne: calculateMultiplications(multiplications),
  partTwo: calculateMultiplications(filterMultiplications(multiplicationsWithDo))
})
