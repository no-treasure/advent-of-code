const FULL_CIRCLE = 100;

export function partOne(input: Array<string>) {
  let position = 50;
  let result = 0;

  for (const turn of input) {
    const direction = turn[0];
    const value = Number(turn.slice(1));

    if (direction === "L") {
      position -= value;
    } else if (direction === "R") {
      position += value;
    }

    position = position % 100;

    if (position < 0) {
      position += FULL_CIRCLE;
    }
    if (position >= FULL_CIRCLE) {
      position -= FULL_CIRCLE;
    }

    if (position === 0) result += 1;
  }

  return result;
}
