{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): number => {
      const sumResult = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);

      return sumResult;
    };

    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
