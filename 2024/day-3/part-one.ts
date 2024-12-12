// ["mul(123, 123)"] -> 15129
export function partOne(multiplications: Array<string>): number {
  return multiplications.reduce((acc, multiplication) => {
    const [a, b] = multiplication.split(",");

    return acc + Number(a.slice(4)) * Number(b.slice(0, -1));
  }, 0);
}
