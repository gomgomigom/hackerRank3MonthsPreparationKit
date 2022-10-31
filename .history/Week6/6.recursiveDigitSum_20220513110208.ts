{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): number => {
      let result = [...n]
        .map((value) => Number.parseInt(value, 10))
        .reduce((a, b) => a + b);
    };
    console.log(sum(n));
    // const start: string = (Number.parseInt(sum(n), 10) * k).toString();

    let i = 0;

    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
