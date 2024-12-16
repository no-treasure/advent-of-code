function repeatValueInArray<T>(value: T, times: number): T[] {
  return Array.from({ length: times }, () => value);
}

export function partOne(input: string): number {
  let currentId = 0;

  const disk = input.split("").map(Number).reduce((acc, value, index) => {
    const isFile = index % 2 === 0;

    const segment = repeatValueInArray(isFile ? String(currentId) : ".", value);

    if (isFile) {
      currentId++;
    }

    return acc.concat(segment);
  }, [] as Array<string>);

  const dotsCount = disk.filter((v) => v === ".").length;

  const maxIter = disk.length - dotsCount;

  const { head, rest } = Object.groupBy(
    disk,
    (_, index) => index < maxIter ? "head" : "rest",
  );

  const trash = (rest || []).filter((v) => v !== ".");
  const result = head!;

  result.forEach((value, i) => {
    if (value === ".") {
      result[i] = trash.pop()!;
    }
  });

  return result.reduce(
    (acc, value, index) => acc + (Number(value) * index),
    0,
  );
}
