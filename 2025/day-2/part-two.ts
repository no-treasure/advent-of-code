const isInvalidId = (id: number) => /^(\d+)\1+$/.test(String(id));

// export function partTwo(input: string) {
//   return input.split(",")
//     .map((sequence) => sequence.split("-").map(Number))
//     .reduce(
//       (acc, [start, end]) => {
//         for (let i = start; i <= end; i++) {
//           if (isInvalidId(i)) acc += i;
//         }

//         return acc;
//       },
//       0,
//     );
// }

export function partTwo(input: string) {
  let result = 0;

  const sequences = input.split(",").map((sequence) =>
    sequence.split("-").map(Number)
  );

  sequences.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      if (isInvalidId(i)) {
        result += i;
      }
    }
  });

  return result;
}
