// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const fs = require("node:fs");
const path = require("node:path");

function readFile() {
  const filePath = path.resolve(__dirname, "dados.json");
  const json = fs.readFileSync(filePath, "utf-8");

  const data = JSON.parse(json);

  return data;
}

const data = readFile();
const values = data.map((item) => item.valor).filter((valor) => valor !== 0);

const minValue = Math.min(...values);
const maxValue = Math.max(...values);
const valueUpperAverage = values.filter((value) => value > calculateAverage()).length;

function calculateAverage() {
  let sum = 0;
  const length = values.length;

  for (let i = 0; i < length; i++) {
    sum += values[i];
  }

  return sum / length;
}

console.log(calculateAverage());

console.log("Menor valor de faturamento: ", minValue);
console.log("Maior valor de faturamento: ", maxValue);
console.log("Número de dias de faturamento superior a média mensal: ", valueUpperAverage);
