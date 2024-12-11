export function partTwo(firstColumn: Array<number>, secondColumn: Array<number>): number {
  return firstColumn.reduce((acc, value) => {
    const similarCount = secondColumn.filter((v) => v === value).length

    return acc + value * similarCount
  }, 0)
}
