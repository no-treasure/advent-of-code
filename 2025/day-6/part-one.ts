function turnMatrixRight<T extends string>(matrix: Array<Array<T>>) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rotatedMatrix = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      rotatedMatrix[cols - 1 - col][row] = matrix[row][col];
    }
  }

  return rotatedMatrix;
}

export function partOne(input: string[][]) {
  const rotated = turnMatrixRight(input);
  let result = 0;

  for (const row of rotated) {
    const operation = row[row.length - 1];
    let rowResult = Number(row.at(0));

    for (let col = 1; col < row.length - 1; col++) {
      if (operation === "+") {
        rowResult += Number(row[col]);
      } else if (operation === "*") {
        rowResult *= Number(row[col]);
      }
    }

    result += rowResult;
  }

  return result;
}
