function turnMatrixRight<T extends string>(matrix: Array<Array<T>>) {
  const rows = matrix.length
  const cols = matrix[0].length
  // Создаём новую матрицу с изменёнными размерами
  const rotatedMatrix = Array.from({ length: cols }, () => Array(rows).fill(0))

  // Транспонирование и реверс строк
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      rotatedMatrix[cols - 1 - col][row] = matrix[row][col]
    }
  }

  return rotatedMatrix
}

function findGuardPositionX(obstructionsMap: Array<Array<string>>) {
  return obstructionsMap.findIndex((line) => line.includes('^'))
}
function findGuardPositionY(obstructionsMap: Array<Array<string>>, guardX: number) {
  return obstructionsMap[guardX].indexOf('^')
}

function countX(matrix: Array<Array<string>>): number {
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i]
    for (let j = 0; j < line.length; j++) {
      if (line[j] === 'X') {
        count++
      }
    }
  }

  return count
}

function getTrace(
  obstructionsMap: Array<Array<string>>,
  guardX: number,
  guardY: number
): Array<string> {
  const trace: Array<string> = []

  for (let i = 0; i <= guardX; i++) {
    trace.push(obstructionsMap[i][guardY])
  }

  return trace
}

export function countDistinctPositions(obstructionsMap: Array<Array<string>>): number {
  let matrix = obstructionsMap

  let guardX = findGuardPositionX(obstructionsMap)
  let guardY = findGuardPositionY(obstructionsMap, guardX)

  let trace = getTrace(obstructionsMap, guardX, guardY)

  let obstacleIndex = trace.findIndex((char) => char === '#')

  trace.forEach((char, charIndex) => {
    if (charIndex > obstacleIndex && char === '.') {
      matrix[charIndex][guardY] = 'X'
    }
  })

  while (obstacleIndex != -1) {
    matrix[guardX][guardY] = 'X'
    matrix[obstacleIndex + 1][guardY] = '^'

    matrix = turnMatrixRight(matrix)

    guardX = findGuardPositionX(matrix)
    guardY = findGuardPositionY(matrix, guardX)

    trace = getTrace(matrix, guardX, guardY)

    obstacleIndex = trace.findIndex((char) => char === '#')

    if (obstacleIndex !== -1) {
      trace.forEach((char, charIndex) => {
        if (charIndex > obstacleIndex && char === '.') {
          matrix[charIndex][guardY] = 'X'
        }
      })
    }
  }

  return countX(matrix) + trace.length
}
