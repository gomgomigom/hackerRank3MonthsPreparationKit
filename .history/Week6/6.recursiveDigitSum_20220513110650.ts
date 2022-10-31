{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): number => {
      const sumResult = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);

      return sumResult;
    };
    console.log(sum(n));
    let result: number | string;
    let i = 0;
    i == 0 ? ((result = sum(n) * k), i++) : (result = sum(result.toString()));

    // const start: string = (Number.parseInt(sum(n), 10) * k).toString();
    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
