const OPERATORS = ["+", "*", "||"] as const;

function generateCombinations(length: number): Array<Array<string>> {
  if (length === 0) return [[]];

  const smallerCombinations = generateCombinations(length - 1);

  return smallerCombinations.flatMap((combination) =>
    OPERATORS.map((op) => [...combination, op])
  );
}

function evaluateExpression(
  numbers: Array<number>,
  ops: Array<string>,
): number {
  let result = numbers[0];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") {
      result += numbers[i + 1];
    } else if (ops[i] === "*") {
      result *= numbers[i + 1];
    } else if (ops[i] === "||") {
      result = Number(String(result) + String(numbers[i + 1]));
    }
  }

  return result;
}

export function partTwo(input: Array<Array<string>>): number {
  return input
    .filter((line) => {
      const target = Number(line[0]);
      const numbers = line[1].split(" ").map(Number);

      const combinations = generateCombinations(numbers.length - 1);

      for (const ops of combinations) {
        const result = evaluateExpression(numbers, ops);
        if (result === target) {
          return true;
        }
      }

      return false;
    })
    .reduce((acc, [target]) => acc + Number(target), 0);
}
