export function partOne(
  firstColumn: Array<number>,
  secondColumn: Array<number>,
): number {
  const sortedSecondColumn = secondColumn.sort();

  return firstColumn.sort().reduce((acc, value, index) => {
    return acc + Math.abs(value - sortedSecondColumn[index]);
  }, 0);
}
