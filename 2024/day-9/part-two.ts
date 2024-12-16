function repeatValueInArray<T>(value: T, times: number): T[] {
  return Array.from({ length: times }, () => value);
}

function dotsCount(disk: Array<string>): number {
  return disk.filter((v) => v === ".").length;
}

function findEmptySpaceIndex(
  input: Array<Array<string>>,
  segment: Array<string>,
  maxIndex: number,
): number {
  const segmentLength = segment.length;

  const index = input.findIndex((row) =>
    segmentLength <= row.length && dotsCount(row) >= segmentLength
  );

  return index <= maxIndex ? index : -1;
}

export function partTwo(input: string): number {
  let currentId = 0;

  const disk = input.split("").map(Number).reduce((acc, value, index) => {
    const isFile = index % 2 === 0;

    const segment = repeatValueInArray(isFile ? String(currentId) : ".", value);

    if (isFile) {
      currentId++;
    }

    return acc.concat([segment]);
  }, [] as Array<Array<string>>).filter((segment) => Boolean(segment.length));

  for (let i = disk.length - 1; i !== 0; i--) {
    const segment = [...disk[i]];
    const segmentLength = segment.length;

    if (segment[0] !== ".") {
      const firstEmptySpaceIndex = findEmptySpaceIndex(disk, segment, i);

      if (firstEmptySpaceIndex !== -1) {
        const emptySegment = disk[firstEmptySpaceIndex];
        disk[firstEmptySpaceIndex] = Array.from(
          { length: emptySegment.length },
          (_, i) =>
            emptySegment[i] === "." ? segment.shift() || "." : emptySegment[i],
        );
        disk[i] = Array.from({ length: segmentLength }, () => ".");
      }
    }
  }

  return disk.flat().reduce(
    (acc, value, index) => {
      if (value !== ".") {
        return acc + (Number(value) * index);
      }

      return acc;
    },
    0,
  );
}
