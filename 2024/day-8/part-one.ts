type Antennas = Record<string, Array<Array<number>>>;
type Grid = Array<Array<string>>;
type Antinodes = Set<string>;

function parseMap(grid: Grid) {
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
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];

        const cx1 = x1 + x1 - x2;
        const cy1 = y1 + y1 - y2;
        const cx2 = x2 - x1 + x2;
        const cy2 = y2 - y1 + y2;

        const resX1 = Math.round(cx1);
        const resY1 = Math.round(cy1);
        const resX2 = Math.round(cx2);
        const resY2 = Math.round(cy2);

        if (resX1 >= 0 && resY1 >= 0 && resX1 < xLength && resY1 < yLength) {
          antinodes.add(`${resX1},${resY1}`);
        }

        if (resX2 >= 0 && resY2 >= 0 && resX2 < xLength && resY2 < yLength) {
          antinodes.add(`${resX2},${resY2}`);
        }
      }
    }
  }

  return antinodes;
}

export function partOne(grid: Grid) {
  const antennas = parseMap(grid);
  const antinodes = calculateAntinodes(antennas, grid);

  return antinodes.size;
}
