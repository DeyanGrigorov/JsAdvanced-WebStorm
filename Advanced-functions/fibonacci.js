//
// function getFibonacci() {
//   let num1 = 0;
//   let num2 = 1;
//   let result = 0;
//
//   return function fib() {
//     result = num1 + num2
//     num1 = num2;
//     num2 = result
//     return num1;
//   }
// }

function getFibonacci(num) {
  if (num <= 1) return 1;

  return getFibonacci(num - 1) + getFibonacci(num - 2);
}

console.log(getFibonacci(0))
console.log(getFibonacci(1))
console.log(getFibonacci(2))
console.log(getFibonacci(3))
console.log(getFibonacci(4))
console.log(getFibonacci(5))



