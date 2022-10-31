{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): string => {
      const result = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);
      return result.toString();
    };
    console.log(sum(n));
    const length: number = sum(n).length;
    const start: string = (Number.parseInt(sum(n), 10) * k).toString();

    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
