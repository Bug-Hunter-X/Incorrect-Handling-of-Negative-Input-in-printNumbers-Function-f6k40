function printNumbers(n: number): void {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

//Corrected version
printNumbers(5); // This will print numbers 1 through 5

try {
  printNumbers(-5); // This will throw an error
} catch (error) {
  console.error(error.message);
}

//Alternative: handle negative input gracefully
function printNumbers2(n: number): void {
    if (n <= 0) {
        console.log('Input must be a positive integer. Nothing printed.');
        return;
    }
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers2(5);
printNumbers2(-5); 