function isSafe(reports: Array<number>): boolean {
  const isIncreasing = reports[0] - reports[reports.length - 1] < 0;

  return reports.reduce((acc, current, index) => {
    if (index === 0) {
      return acc;
    }

    const previous = reports[index - 1];

    if (isIncreasing) {
      return acc && current - previous <= 3 && current - previous > 0;
    }

    return acc && previous - current <= 3 && previous - current > 0;
  }, true);
}

function isSafeWithDampener(reports: Array<number>): boolean {
  const safe = isSafe(reports);

  if (safe) return true;

  return reports.some((_, index) => {
    const dampened = [...reports];
    dampened.splice(index, 1);

    if (isSafe(dampened)) return true;
  });
}

export function partOne(reports: Array<Array<number>>): number {
  return reports.filter(isSafe).length;
}

export function partTwo(reports: Array<Array<number>>): number {
  return reports.filter(isSafeWithDampener).length;
}
