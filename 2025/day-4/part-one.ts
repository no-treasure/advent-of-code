function getNeighbors(grid: string[][], row: number, col: number) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;

      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        neighbors.push(grid[newRow][newCol]);
      }
    }
  }

  return neighbors;
}
export function partOne(input: Array<string>) {
  let result = 0;

  input
    .map((line) => line.split(""))
    .forEach((line, row, grid) => {
      line.forEach((char, col) => {
        if (char === "@") {
          const neighbors = getNeighbors(grid, row, col);
          const papersCount = neighbors.reduce(
            (acc, item) => item === "@" ? acc + 1 : acc,
            0,
          );

          if (papersCount < 4) {
            result += 1;
          }
        }
      });
    });

  return result;
}
