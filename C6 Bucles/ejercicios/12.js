function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let multiplo3 = num % 3=== 0;
  let multiplo5 = num % 5=== 0;
if (multiplo3 && multiplo5) {
  return "fizzBuzz";
} else if (multiplo3) {
  return "fizz";
} else if (multiplo5) {
  return "Buzz";
} else {
  return false;
}
}

module.exports = fizzBuzz;
console.log(fizzBuzz(15));