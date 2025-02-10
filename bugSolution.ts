function combine(a: string, b: string): string {
  return a + b;
}

function combineNumbers(a: number, b: number): number {
  return a + b;
}

let resultString = combine("hello", "5");
let resultNumber = combineNumbers(5, 10);
console.log(resultString); // Output: hello5
console.log(resultNumber); // Output: 15