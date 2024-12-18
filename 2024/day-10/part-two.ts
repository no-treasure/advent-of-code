function moveToPeak(
  start: [number, number],
  grid: Array<Array<string>>,
): number {
  let [x, y] = start;
  let currentValue = Number(grid[x][y]);
  let paths = 0;

  let forks: Array<[number, number]> = [];

  while (currentValue !== 9 && x >= 0 && y >= 0) {
    const nearItems = [{ x: x - 1, y }, { x: x + 1, y }, { x, y: y - 1 }, {
      x,
      y: y + 1,
    }].filter((near) => grid[near.x] && grid[near.x][near.y]);

    nearItems.forEach((near) => {
      if (grid[near.x][near.y] === String(currentValue + 1)) {
        forks.push([near.x, near.y]);
      }
    });

    currentValue++;

    if (forks.length === 0) {
      return paths;
    }

    [x, y] = forks.shift()!;

    forks.forEach((fork) => {
      paths += moveToPeak(fork, grid);
    });

    forks = [];
  }

  return paths + 1;
}

export function partTwo(grid: Array<Array<string>>): number {
  const trailHeads: [number, number][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "0") {
        trailHeads.push([i, j]);
      }
    }
  }

  let result = 0;

  trailHeads.forEach((start) => {
    result += moveToPeak(start, grid);
  });

  return result;
}
