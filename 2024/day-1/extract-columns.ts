export function extractColumns(data: string): [Array<number>, Array<number>] {
  const { firstColumn = [], secondColumn = [] } = Object.groupBy(
    data
      .split('\n')
      .map((line) => line.split(' '))
      .flat()
      .filter(Boolean)
      .map(Number),
    (_, index) => (index % 2 ? 'secondColumn' : 'firstColumn')
  )

  return [firstColumn, secondColumn]
}
