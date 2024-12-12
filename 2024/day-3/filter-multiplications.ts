export function filterMultiplications(inputMultiplications: Array<string>) {
  let enabled = true;

  return inputMultiplications.filter((multiplication) => {
    if (multiplication === `don't()`) {
      enabled = false;

      return false;
    }

    if (multiplication === `do()`) {
      enabled = true;

      return false;
    }

    return enabled;
  }, 0);
}
