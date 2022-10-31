function formingMagicSquare(s: number[][]): number {
  return 3;
}

const case0 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

const case1 = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

console.log(formingMagicSquare(case0));
console.log('----');
console.log(formingMagicSquare(case1));


// javascript program to generate odd sized magic squares
// Function to generate odd sized magic squares

function generateSquare(n : number)
{
	let magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));
	let i = parseInt(n / 2);
	let j = n - 1;

	// One by one put all values in magic square
	for (num = 1; num <= n * n;) {
		if (i == -1 && j == n) // 3rd condition
		{
			j = n - 2;
			i = 0;
		}
		else {
			// 1st condition helper if next number
			// goes to out of square's right side
			if (j == n)
				j = 0;

			// 1st condition helper if next number is
			// goes to out of square's upper side
			if (i < 0)
				i = n - 1;
		}

		// 2nd condition
		if (magicSquare[i][j] != 0) {
			j -= 2;
			i++;
			continue;
		}
		else
			// set number
			magicSquare[i][j] = num++;

		// 1st condition
		j++;
		i--;
	}

	// print magic square
	document.write("The Magic Square for " + n
					+ ":<br>");
	document.write("Sum of each row or column "
					+ parseInt(n * (n * n + 1) / 2) + ":<br>");
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++)
			document.write(magicSquare[i][j] + " ");
		document.write("<br>");
	}
}

// driver program
// Works only when n is odd
var n = 7;
generateSquare(n);

// This code is contributed by 29AjayKumar

</script>
