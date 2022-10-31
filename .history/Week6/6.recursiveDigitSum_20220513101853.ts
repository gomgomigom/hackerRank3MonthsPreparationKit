{
  function superDigit(n: string, k: number): number {
    const sum = (n: string) =>
      [...n].forEach((value) => Number.parseInt(value, 10));
    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
