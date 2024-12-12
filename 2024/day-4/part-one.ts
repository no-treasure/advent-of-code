export function partOne(lines: Array<string>): number {
  return lines.reduce((acc, line, lineIndex) => {
    return (
      acc +
      line.split("").reduce((wordAcc, word, wordIndex) => {
        if (word !== "X") return wordAcc;

        let count = 0;

        const isHorizontal = wordIndex + 3 <= line.length &&
          line.slice(wordIndex, wordIndex + 4) === "XMAS";

        const isBackwardHorizontal = wordIndex - 3 >= 0 &&
          line.slice(wordIndex - 3, wordIndex + 1) === "SAMX";

        const isVertical = lineIndex + 3 < lines.length &&
          lines[lineIndex + 1][wordIndex] === "M" &&
          lines[lineIndex + 2][wordIndex] === "A" &&
          lines[lineIndex + 3][wordIndex] === "S";

        const isBackwardVertical = lineIndex - 3 >= 0 &&
          lines[lineIndex - 1][wordIndex] === "M" &&
          lines[lineIndex - 2][wordIndex] === "A" &&
          lines[lineIndex - 3][wordIndex] === "S";

        const isRightBottomDiagonal = lineIndex + 3 < lines.length &&
          wordIndex + 3 <= line.length &&
          lines[lineIndex + 1][wordIndex + 1] === "M" &&
          lines[lineIndex + 2][wordIndex + 2] === "A" &&
          lines[lineIndex + 3][wordIndex + 3] === "S";

        const isLeftBottomDiagonal = lineIndex + 3 < lines.length &&
          wordIndex - 3 >= 0 &&
          lines[lineIndex + 1][wordIndex - 1] === "M" &&
          lines[lineIndex + 2][wordIndex - 2] === "A" &&
          lines[lineIndex + 3][wordIndex - 3] === "S";

        const isRightTopDiagonal = lineIndex - 3 >= 0 &&
          wordIndex + 3 <= line.length &&
          lines[lineIndex - 1][wordIndex + 1] === "M" &&
          lines[lineIndex - 2][wordIndex + 2] === "A" &&
          lines[lineIndex - 3][wordIndex + 3] === "S";

        const isLeftTopDiagonal = lineIndex - 3 >= 0 &&
          wordIndex - 3 >= 0 &&
          lines[lineIndex - 1][wordIndex - 1] === "M" &&
          lines[lineIndex - 2][wordIndex - 2] === "A" &&
          lines[lineIndex - 3][wordIndex - 3] === "S";

        if (isHorizontal) count++;
        if (isBackwardHorizontal) count++;
        if (isVertical) count++;
        if (isBackwardVertical) count++;
        if (isRightBottomDiagonal) count++;
        if (isLeftBottomDiagonal) count++;
        if (isRightTopDiagonal) count++;
        if (isLeftTopDiagonal) count++;

        return wordAcc + count;
      }, 0)
    );
  }, 0);
}
