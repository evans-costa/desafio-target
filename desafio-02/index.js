// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
// sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13,
// 21, 34...), escreva um programa na linguagem que desejar onde, informado um
// número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se
//o número informado pertence ou não a sequência.

function isFibonacci(n) {
  if (n < 0) return false;

  let a = 0;
  let b = 1;

  if (a === n || b === n) return true;

  let next = a + b;

  while (next <= n) {
    if (next === n) return true;

    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

const number = 56;

isFibonacci(number)
  ? console.log(`${number} is a Fibonacci number`)
  : console.log(`${number} is not a Fibonacci number`);
