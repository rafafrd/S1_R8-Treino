let elementos = 0;
let soma = 0;
let pergunta;
let resultado;
do {
  let numero = parseInt(prompt("Digite um numero para adicionar na média"));
  soma += numero;
  elementos++;
  pergunta = prompt("Deseja continuar executando o programa (S/N)").toLowerCase();
} while (pergunta !== "n");
resultado = soma / elementos
alert(`O resultado da média é ${resultado.toFixed(2)}`);