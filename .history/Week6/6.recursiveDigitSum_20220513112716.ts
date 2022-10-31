{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): number => {
      const sumResult = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);

      return sumResult;
    };
    const recursive = (sumDigit: number): number => {
      let result;
      if (sumDigit >= 10) {
        result = sum(sumDigit.toString());
      } : sumDigit
      sumDigit >= 10 ? sum(sumDigit.toString()) : sumDigit;
    };
    console.log(sum(n) * k);
    while (sum(n) * k > 10) {}

    // const start: string = (Number.parseInt(sum(n), 10) * k).toString();
    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
