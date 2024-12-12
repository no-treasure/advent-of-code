type Antennas = Record<string, Array<Array<number>>>;
type Grid = Array<Array<string>>;
type Antinodes = Set<string>;

function parseGrid(grid: Grid) {
  const antennas: Antennas = {};

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const char = grid[x][y];

      if (char !== "." && char !== "#") {
        if (!antennas[char]) antennas[char] = [];
        antennas[char].push([x, y]);
      }
    }
  }

  return antennas;
}

function calculateAntinodes(antennas: Antennas, grid: Grid): Antinodes {
  const antinodes = new Set<string>();
  const yLength = grid.length;
  const xLength = grid[0].length;

  for (const freq in antennas) {
    const points = antennas[freq];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[j];

        const dx1 = x1 - x2;
        const dy1 = y1 - y2;
        const dx2 = x2 - x1;
        const dy2 = y2 - y1;

        let firstInRange = [x1, y1].every((v) => v >= 0 && v < xLength);
        let secondInRange = [x2, y2].every((v) => v >= 0 && v < yLength);

        while (firstInRange || secondInRange) {
          const cx1 = x1 + dx1;
          const cy1 = y1 + dy1;
          const cx2 = x2 + dx2;
          const cy2 = y2 + dy2;

          x1 = Math.round(cx1);
          y1 = Math.round(cy1);
          x2 = Math.round(cx2);
          y2 = Math.round(cy2);

          firstInRange = [x1, y1].every((v) => v >= 0 && v < xLength);
          secondInRange = [x2, y2].every((v) => v >= 0 && v < yLength);

          if (x1 >= 0 && y1 >= 0 && x1 < xLength && y1 < yLength) {
            antinodes.add(`${x1},${y1}`);
          }

          if (x2 >= 0 && y2 >= 0 && x2 < xLength && y2 < yLength) {
            antinodes.add(`${x2},${y2}`);
          }
        }
      }
    }
  }

  return antinodes;
}

export function partTwo(grid: Grid) {
  const antennas = parseGrid(grid);

  const antinodes = calculateAntinodes(antennas, grid);

  antinodes.forEach((antinode) => {
    const [x, y] = antinode.split(",").map(Number);

    grid[x][y] = "#";
  });

  return grid.reduce(
    (acc, v1) => acc + v1.reduce((acc2, v2) => acc2 + (v2 !== "." ? 1 : 0), 0),
    0,
  );
}
