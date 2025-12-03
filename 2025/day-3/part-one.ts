function findMaxJoltage(bank: string): number {
  let max = 0;

  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const val = parseInt(bank[i] + bank[j], 10);
      if (val > max) max = val;
    }
  }
  return max;
}

export function partOne(input: Array<string>) {
  return input
    .reduce((sum, line) => sum + findMaxJoltage(line), 0);
}
