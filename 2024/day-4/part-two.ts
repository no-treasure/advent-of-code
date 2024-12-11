function isMasOrSam(input: string): boolean {
  return input === 'MAS' || input === 'SAM'
}

export function partTwo(lines: Array<string>): number {
  return lines.reduce((acc, line, lineIndex) => {
    return (
      acc +
      line.split('').reduce((wordAcc, word, wordIndex) => {
        if (word !== 'A') return wordAcc

        if (
          wordIndex === 0 ||
          wordIndex === line.length - 1 ||
          lineIndex === 0 ||
          lineIndex === lines.length - 1
        )
          return wordAcc

        const firstDiagonal =
          lines[lineIndex - 1][wordIndex - 1] + 'A' + lines[lineIndex + 1][wordIndex + 1]

        const secondDiagonal =
          lines[lineIndex - 1][wordIndex + 1] + 'A' + lines[lineIndex + 1][wordIndex - 1]

        if (isMasOrSam(firstDiagonal) && isMasOrSam(secondDiagonal)) {
          return wordAcc + 1
        }

        return wordAcc
      }, 0)
    )
  }, 0)
}
