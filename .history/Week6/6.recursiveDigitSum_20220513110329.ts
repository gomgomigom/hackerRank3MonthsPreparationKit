{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): number => {
      const sumResult = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);

      return sumResult;
    };
    console.log(sum(n));
    let i = 0;
    i == 0 ? 
    // const start: string = (Number.parseInt(sum(n), 10) * k).toString();

  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
