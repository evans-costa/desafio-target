// 5) Escreva um programa que inverta os caracteres de um string.

function reverseString(s) {
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  return reversedString;
}

console.log(reverseString("target"));
