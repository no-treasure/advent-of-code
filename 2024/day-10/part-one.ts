function moveToPeak(
  start: [number, number],
  grid: Array<Array<string>>,
): Set<string> {
  let [x, y] = start;
  let currentValue = Number(grid[x][y]);

  let forks: Array<[number, number]> = [];
  const peaksRiched: Set<string> = new Set();

  while (currentValue !== 9 && x >= 0 && y >= 0) {
    const nearItems = [{ x: x - 1, y }, { x: x + 1, y }, { x, y: y - 1 }, {
      x,
      y: y + 1,
    }].filter((near) => grid[near.x] && grid[near.x][near.y]);

    nearItems.forEach((near) => {
      if (grid[near.x][near.y] === "9" && currentValue === 8) {
        peaksRiched.add(`${near.x}, ${near.y}`);

        return;
      }

      if (grid[near.x][near.y] === String(currentValue + 1)) {
        forks.push([near.x, near.y]);
      }
    });

    currentValue++;
    [x, y] = forks.shift() || [-1, -1];

    forks.forEach((fork) => {
      moveToPeak(fork, grid).forEach((peak) => {
        peaksRiched.add(peak);
      });
    });

    forks = [];
  }

  return peaksRiched;
}

export function partOne(grid: Array<Array<string>>): number {
  const trailHeads: [number, number][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "0") {
        trailHeads.push([i, j]);
      }
    }
  }

  const res = trailHeads.map((start) => {
    return moveToPeak(start, grid);
  });

  return res.reduce((acc, v) => acc + v.size, 0);
}
