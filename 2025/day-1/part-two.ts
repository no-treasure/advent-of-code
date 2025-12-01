const FULL_CIRCLE = 100;

function normalize(position: number): number {
  return ((position % FULL_CIRCLE) + FULL_CIRCLE) % FULL_CIRCLE;
}

export function partTwo(input: Array<string>) {
  let position = 50;
  let result = 0;

  for (const turn of input) {
    const direction = turn[0];
    const value = Number(turn.slice(1));

    let firstZeroAt: number;

    if (direction === "L") {
      firstZeroAt = position === 0 ? FULL_CIRCLE : position;
    } else {
      firstZeroAt = position === 0 ? FULL_CIRCLE : FULL_CIRCLE - position;
    }

    let spins = 0;
    if (value >= firstZeroAt) {
      spins = 1 + Math.floor((value - firstZeroAt) / FULL_CIRCLE);
    }

    result += spins;

    if (direction === "L") {
      position -= value;
    } else {
      position += value;
    }

    position = normalize(position);
  }

  return result;
}
