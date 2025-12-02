const isInvalidId = (id: number) => /^(\d+)\1$/.test(String(id));

export function partOne(input: string) {
  const result: number[] = [];

  const sequences = input.split(",").map((sequence) =>
    sequence.split("-").map(Number)
  );

  sequences.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      if (isInvalidId(i)) {
        result.push(i);
      }
    }
  });

  return result.reduce((acc, v) => acc + v);
}
