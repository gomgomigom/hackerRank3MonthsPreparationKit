{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): number => {
      const result = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);
      return result;
    };
    console.log(sum(n));

    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
