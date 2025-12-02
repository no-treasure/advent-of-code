export function partTwo(rules: Array<string>, pages: Array<string>): number {
  const rulesMap = new Map<string, string[]>();

  const rulesObj = Object.groupBy(
    rules.map((rule) => rule.split("|")),
    (rule) => rule[0],
  );

  Object.keys(rulesObj).forEach((key) => {
    rulesMap.set(
      key,
      rulesObj[key]!.flat().filter((value: string) => value !== key),
    );
  });

  const filtered = pages.filter((line) => {
    const pagesLine = line.split(",");

    return pagesLine.every((page, index) => {
      const last = [...pagesLine].slice(index + 1);

      if (index === pagesLine.length - 1) return true;
      if (rulesMap.get(page) === undefined) return false;

      for (const lastPage of last) {
        if (!rulesMap.get(page)!.includes(lastPage)) return false;
      }

      return true;
    });
  });

  const reverseFiltered = pages
    .filter((line) => !filtered.includes(line))
    .map((line) => line.split(","));

  const sorted = reverseFiltered.map((line) =>
    line.toSorted((a, b) => {
      if (rulesMap.get(a) && rulesMap.get(a)!.includes(b)) return -1;
      if (rulesMap.get(b) && rulesMap.get(b)!.includes(a)) return 1;

      return 1;
    })
  );

  const middleNumSum = sorted.reduce((acc, line) => {
    return acc + Number(line[Math.floor(line.length / 2)]);
  }, 0);

  return middleNumSum;
}
