function mergeIntervals(intervals: number[][]) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    if (next[0] <= current[1]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = next;
    }
  }

  result.push(current);

  return result;
}

export function partTwo([freshFruitIdIntervals, _]: string[][]) {
  const mergedIntervals = mergeIntervals(
    freshFruitIdIntervals.map((range) => range.split("-").map(Number)),
  );

  let result = 0;

  for (const [start, end] of mergedIntervals) {
    result += end - start + 1;
  }

  return result;
}
