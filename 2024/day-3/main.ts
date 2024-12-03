// ["mul(123, 123)"] -> 15129
function calculateMultiplications(multiplications: Array<string>): number {
  return multiplications.reduce((acc, multiplication) => {
    const [a, b] = multiplication.split(',')

    return acc + Number(a.slice(4)) * Number(b.slice(0, -1))
  }, 0)
}

Deno.readTextFile('./day-3/input.txt').then((data) => {
  const multiplications = data.match(/mul\(\d+,\d+\)/g) || []
  const multiplicationsWithDo = data.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g) || []

  const partOne = calculateMultiplications(multiplications)

  let enabled = true

  const partTwo = calculateMultiplications(
    multiplicationsWithDo.filter((multiplication) => {
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
  )

  console.log({ partOne, partTwo })
})
