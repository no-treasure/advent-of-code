const isInvalidId = (id: number) => /^(\d+)\1$/.test(String(id));

export function partOne(input: string) {
  let result = 0;

  const sequences = input
    .split(",")
    .map((sequence) => sequence.split("-").map(Number));

  sequences.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      if (isInvalidId(i)) {
        result += i;
      }
    }
  });

  return result;
}
