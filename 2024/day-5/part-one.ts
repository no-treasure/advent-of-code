export function partOne(rules: Array<string>, pages: Array<string>): number {
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

  const middleNumSum = filtered.reduce((acc, line) => {
    const arr = line.split(",");

    return acc + Number(arr[Math.floor(arr.length / 2)]);
  }, 0);

  return middleNumSum;
}
