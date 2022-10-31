{
  function superDigit(n: string, k: number): number {
    const sum = (n: string): string => {
      let result: number;
      [...n].forEach((digit) => (result += parseInt(digit)));
      return toString(result);
    };
    sum(n);
    return 3;
  }

  console.log(superDigit('9875', 4));
  console.log(superDigit('123', 3));
  console.log(superDigit('148', 3));
}
