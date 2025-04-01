function partition<T, S extends T>(
  array: T[],
  predicate: (currentValue: T, currentIndex?: number, array?: T[]) => currentValue is S,
): [S[], T[]] {
  return array.reduce<[S[], T[]]>(
    (total, currentValue, currentIndex, array) => {
      if (predicate(currentValue, currentIndex, array)) {
        total[0].push(currentValue);
      } else {
        total[1].push(currentValue);
      }
      return total;
    },
    [[], []],
  );
}

export { partition };
